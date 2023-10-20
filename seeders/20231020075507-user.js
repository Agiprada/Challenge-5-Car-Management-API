"use strict";
const { User, Auth } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Gilang",
        age: 21,
        address: "hammer city",
        role: "SuperAdmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Agiprada",
        age: 21,
        address: "hammer city",
        role: "SuperAdmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    const users = await User.findAll();

    await queryInterface.bulkInsert("Auths", [
      {
        email: "gilang@gmail.com",
        password:
          "$2a$12$hh/qqRgiCCztrQfwBvVxwO7QoiaATTkrMX5KaPKGb1RvdslYKhROG",
        userId: users[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "agiprada@gmail.com",
        password:
          "$2a$12$hh/qqRgiCCztrQfwBvVxwO7QoiaATTkrMX5KaPKGb1RvdslYKhROG",
        userId: users[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Auths", null, {});
  },
};
