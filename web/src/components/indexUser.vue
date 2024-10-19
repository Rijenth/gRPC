<script setup lang="ts">
import { ref } from 'vue';
import User from '../models/user';

const users = ref<User[]>([
  new User({
    id: 1,
    username: 'johnDoe',
    email: 'john@example.com',
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: new Date('1990-01-01'),
    address: '123 Street, City',
    phoneNumber: '1234567890',
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    profilePicture: '',
    bio: 'Software developer with 10 years of experience',
  }),
  new User({
    id: 2,
    username: 'janeDoe',
    email: 'jane@example.com',
    firstName: 'Jane',
    lastName: 'Doe',
    dateOfBirth: new Date('1992-05-15'),
    address: '456 Avenue, City',
    phoneNumber: '9876543210',
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    profilePicture: '',
    bio: 'Graphic designer with a love for creative work',
  }),
  new User({
    id: 3,
    username: 'jackSmith',
    email: 'jack@example.com',
    firstName: 'Jack',
    lastName: 'Smith',
    dateOfBirth: new Date('1988-09-22'),
    address: '789 Boulevard, City',
    phoneNumber: '1122334455',
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    profilePicture: '',
    bio: 'Project manager with a knack for agile methodologies',
  }),
]);
</script>

<template>
    <div class="container">
        <table class="user-table">
        <thead>
            <tr>
            <th>Nom d'utilisateur</th>
            <th>Adresse mail</th>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Biographie</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.bio }}</td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.user-table th,
.user-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.user-table th {
  background-color: #f4f4f4;
  font-weight: bold;
}

.user-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.user-table tr:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}

@media (max-width: 600px) {
  .user-table {
    display: block;
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
  }

  .user-table th,
  .user-table td {
    padding: 10px;
    font-size: 14px;
  }
}
</style>
