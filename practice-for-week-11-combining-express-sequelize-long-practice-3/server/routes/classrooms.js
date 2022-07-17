// Instantiate router - DO NOT MODIFY
const express = require('express');
const router = express.Router();

// Import model(s)
const { Classroom, Supply, Student, StudentClassroom, sequelize } = require('../db/models');
const { Op, DataTypes } = require('sequelize');

// List of classrooms
router.get('/', async (req, res, next) => {
    let errorResult = { errors: [], count: 0, pageCount: 0 };

    // Phase 2B: Classroom Search Filters
    /*
        name filter:
            If the name query parameter exists, set the name query
                filter to find a similar match to the name query parameter.
            For example, if name query parameter is 'Ms.', then the
                query should match with classrooms whose name includes 'Ms.'

        studentLimit filter:
            If the studentLimit query parameter includes a comma
                And if the studentLimit query parameter is two numbers separated
                    by a comma, set the studentLimit query filter to be between
                    the first number (min) and the second number (max)
                But if the studentLimit query parameter is NOT two integers
                    separated by a comma, or if min is greater than max, add an
                    error message of 'Student Limit should be two integers:
                    min,max' to errorResult.errors
            If the studentLimit query parameter has no commas
                And if the studentLimit query parameter is a single integer, set
                    the studentLimit query parameter to equal the number
                But if the studentLimit query parameter is NOT an integer, add
                    an error message of 'Student Limit should be a integer' to
                    errorResult.errors 
    */
    const where = {};

    // Your code here
        // if there is name query
    if (req.query.name) {
        where.name = { [Op.like]: `%${req.query.name}%` }
    };

        // if there is studentLimit query
    if (req.query.studentLimit) {

        const split = req.query.studentLimit.split(',');
        const min = parseInt(split[0]);
        const max = parseInt(split[1]);
        console.log(split, min, max)
        if (split.length === 1 && min) {
            where.studentLimit = { [Op.eq]: min };
        } else if (split.length !== 2 || isNaN(min) || isNaN(max)) {
            errorResult.errors.push('Student Limit should be two numbers: min,max');
        } else {
            where.studentLimit = { 
                [Op.and]: {
                    [Op.gt]: min,
                    [Op.lt]: max
                }
            };
        } ;
    };

    const classrooms = await Classroom.findAll({
        attributes: [ 'id', 'name', 'studentLimit' ],
        where,
        // Phase 1B: Order the Classroom search results
        order: [['name']]
    });

    // return error if there is one
    if (errorResult.errors.length > 0) {
        res.status(404);
        res.json(errorResult);
    };

    res.json(classrooms);
});

// Single classroom
router.get('/:id', async (req, res, next) => {
    let classroom = await Classroom.findByPk(req.params.id, {
        attributes: ['id', 'name', 'studentLimit'],
        // Phase 7:
            // Include classroom supplies and order supplies by category then
                // name (both in ascending order)
            // Include students of the classroom and order students by lastName
                // then firstName (both in ascending order)
                // (Optional): No need to include the StudentClassrooms
        // Your code here
        raw: true,
        // include: {
        //     model: Supply,
        //     attributes: ['id', 'name', 'category', 'handed'],
        //     order: [['category'], ['name']],
        // }
    });

    // get classroom query and find supplies of the classroom
    const clroom = await Classroom.findByPk(req.params.id);

    const suppliesInClass = await clroom.getSupplies({
        attributes: ['id', 'name', 'category', 'handed'],
        order: [['category'], ['name']],
    });
    
    classroom.supplies = suppliesInClass;

    // get students in the classroom
    const studentsInClass = await clroom.getStudents({
        attributes: ['id', 'firstName', 'lastName', 'leftHanded'],
        order: [['lastName'], ['firstName']],
        joinTableAttributes: []
    });

    classroom.students = studentsInClass;

    if (!classroom) {
        res.status(404);
        res.send({ message: 'Classroom Not Found' });
    }

    // Phase 5: Supply and Student counts, Overloaded classroom
        // Phase 5A: Find the number of supplies the classroom has and set it as
            // a property of supplyCount on the response
        // Phase 5B: Find the number of students in the classroom and set it as
            // a property of studentCount on the response
        // Phase 5C: Calculate if the classroom is overloaded by comparing the
            // studentLimit of the classroom to the number of students in the
            // classroom
        // Optional Phase 5D: Calculate the average grade of the classroom 
    // Your code here
    
    // 5A: total supplies in classroom
    // const supplies = await Supply.findAll({
    //     // attributes: [
    //     //     [
    //     //         sequelize.fn('COUNT', sequelize.col('id')),
    //     //         'supplyCount'
    //     //     ]
    //     // ],
    //     where: {
    //         classroomId: req.params.id
    //     }
    // });
    
    // classroom.supplyCount = supplies.length;

    // 5B: total students in classroom
    const students = await Student.findAll({
        include: {
            model: StudentClassroom,
            where: {
                classroomId: req.params.id
            }
        }
    })

    // classroom.studentCount = students.length;

    // 5C: is the classroom overloaded?
    classroom.overloaded = students.length > classroom.studentLimit ? true : false;

    // 5D: average grade of a classroom
    const sumGrade = await StudentClassroom.sum('grade', {
        where: {
            classroomId: req.params.id
        }
    });
    
    classroom.avgGrade = sumGrade / students.length;

    res.json(classroom);
});

// Export class - DO NOT MODIFY
module.exports = router;
