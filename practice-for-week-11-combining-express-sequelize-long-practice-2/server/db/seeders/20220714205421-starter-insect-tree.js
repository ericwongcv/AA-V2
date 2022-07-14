'use strict';

const { Insect, Tree, InsectTree } = require('../models');

const insectTrees = [
  {
    insect: { name: "Western Pygmy Blue Butterfly" },
    trees: [
      { tree: "General Sherman" },
      { tree: "General Grant" },
      { tree: "Lincoln" },
      { tree: "Stagg" },
    ],
  },
  {
    insect: { name: "Patu Digua Spider" },
    trees: [
      { tree: "Stagg" },
    ],
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   for (let insectIdx = 0; insectIdx < insectTrees.length; insectIdx++) {
    const { insect, trees } = insectTrees[insectIdx];
    const insectQuery = await Insect.findOne({ where: { name: insect.name } });

    for (let treeIdx = 0; treeIdx < trees.length; treeIdx++) {
      const currentTree = trees[treeIdx];
      const treeQuery = await Tree.findOne({ where: {tree: currentTree.tree } });

      await InsectTree.create({ treeId: treeQuery.id, insectId: insectQuery.id });
    };
   }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     for (let insectIdx = 0; insectIdx < insectTrees.length; insectIdx++) {
      const { insect, trees } = insectTrees[insectIdx];
      const insectQuery = await Insect.findOne({ where: { name: insect.name } });
  
      for (let treeIdx = 0; treeIdx < trees.length; treeIdx++) {
        const currentTree = trees[treeIdx];
        const treeQuery = await Tree.findOne({ where: {tree: currentTree.tree } });

        await InsectTree.destroy({ where: { treeId: treeQuery.id, insectId: insectQuery.id } });
      };
    }
  }
};
