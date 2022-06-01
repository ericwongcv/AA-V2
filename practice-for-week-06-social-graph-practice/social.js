// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    // Your code here
    this.currentID++;
    this.users[this.currentID] = { 'id': this.currentID, 'name': name };
    this.follows[this.currentID] = new Set;
    return this.currentID;
  }

  getUser(userID) {
    // Your code here
    return this.users[userID] ? this.users[userID] : null;
  }

  follow(userID1, userID2) {
    // Your code here
    if (this.users[userID1] && this.users[userID2]) {
      this.follows[userID1].add(userID2);
      return true;
    } else {
      return false;
    };
  }

  getFollows(userID) {
    // Your code here
    return this.follows[userID];
  }

  getFollowers(userID) {
    // Your code here
    let newSet = new Set;

    Object.keys(this.follows).forEach( id => {
      if (this.follows[id].has(userID)) newSet.add(parseInt(id));
    });

    return newSet;
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
    let queue = [[userID]];
    let visited = {};
    visited[userID] = true;
    let degree = [];

    while (queue.length > 0) {
      let path = queue.shift();
      let currentUser = path[path.length - 1];
      let following = this.getFollows(currentUser);

      if (path.length - 2 > 0 && path.length - 2 <= degrees) {
        degree.push(path[path.length - 1]);
      } else if (path.length - 2 > degrees) {
        return degree;
      }

      following.forEach( follow => {
        if (!visited[follow]) {
          visited[follow] = true;
          let newPath = path.concat(follow);
          queue.push(newPath);
        }
      });

    };

  return degree;
  }
}

module.exports = SocialNetwork;
