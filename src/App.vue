<template>
  <div id="app" class="container">
    <div class="page-header">
      <h1>sample application</h1>
</div>
<div class="panel panel-default">
<div class="panel-heading">
  <h3> Add book</h3>

</div>
<div class="panel-body">
  <form id="form" class="form-inline" v-on:submit.prevent="addBook">
    <div class="form-group">
      <label for="booktitle">Title:</label>
      <input type="text" id="bookTitle" class="form-control" v-model="newBook.title"/>
    </div>
    <div class="form-group">
      <label for="bookAuthor">Author:</label>
      <input type="text" id="bookAuthor" class="form-control" v-model="newBook.author"/>
    </div>
    <div class="form-group">
      <label for="bookUrl">Url:</label>
      <input type="text" id="bookUrl" class="form-control" v-model="newBook.url"/>
    </div>
    <input type="submit" class="btn btn-primary" value="Add Book" />
  </form>
</div>
</div>




<div class="panel panel-default">
  <div class="panel-heading">
    <h3> books list</h3>
  </div>
  <div class="panel-body">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>
            title
          </th>
          <th>
            author
          </th>
          <th>
            delete
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books">
          <td>
            <a v-bind:href="book.url">{{book.title}}</a>
          </td>
          <td>
            {{book.author}}
          </td>
          <td>
          <span class="glyphicon glyphicon-trash" v-on:click="removeBook(book)"/>
          </td>
        </tr>
      </tbody>
    </table>
</div>
</div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Firebase from 'firebase'

  let config = {
     apiKey: "AIzaSyB9pXRAoElY-48-TMFCJrgCIRyHVHtViPo",
     authDomain: "siikanapka.firebaseapp.com",
     databaseURL: "https://siikanapka.firebaseio.com",
     projectId: "siikanapka",
     storageBucket: "siikanapka.appspot.com",
     messagingSenderId: "556364887383"
   };
   let app = Firebase.initializeApp(config);
   let db = app.database();
   let booksRef = db.ref('Books');

export default {
  name: 'app',
  firebase:{
    books: booksRef
  },
  data () {
  return{
    newBook:{
      title: '',
      author: '',
      url: ''
    }
  }
},
methods:{
  addBook: function(){
    booksRef.push(this.newBook);
    this.newBook.title = '';
    this.newBook.author = '';
    this.newBook.url = '';
  },
  removeBook: function(book) {
    booksRef.child(book['.key']).remove();
  }
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
