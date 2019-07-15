import { Component } from '@angular/core';
// import {DetailComponent} from './components/detail/detail.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pt13311';


  newstuden = {
    id:0,
    name: "",
    age:0,
    avatar: ""
  }

  // thuc hien hien thi danh sach
  // them/sua/xoa thong tin cua cac students

  students = [
    {
      id: 1,
      name: "nguyen van a",
      age: 15,
      avatar: "https://upload.wikimedia.org/wikipedia/vi/thumb/f/f7/Nobita001.png/200px-Nobita001.png"
    },
      {
      id: 2,
      name: "nguyen van b",
      age: 16,
      avatar: "https://upload.wikimedia.org/wikipedia/vi/thumb/f/f7/Nobita001.png/200px-Nobita001.png"
    },
      {
      id: 3,
      name: "nguyen van c",
      age: 17,
      avatar: "https://upload.wikimedia.org/wikipedia/vi/thumb/f/f7/Nobita001.png/200px-Nobita001.png"
    },
      {
      id: 4,
      name: "nguyen van d",
      age: 18,
      avatar: "https://upload.wikimedia.org/wikipedia/vi/thumb/f/f7/Nobita001.png/200px-Nobita001.png"
    },
  ];

  

  save = () => {
    if(this.newstuden.id == 0){
      this.newstuden.id = this.getNewId();
      this.students.push({...this.newstuden});
    }else{
      var index = this.students.map(
                      (h) => h.id 
                    ).indexOf(this.newstuden.id);
      this.students[index] = {...this.newstuden};
    }
    this.clear();
  }

 clear = () => {
    this.newstuden = {
      id:0,
      name:"",
     age:0,
      avatar:""
    }
  }

  update = (studen) => {
    this.newstuden = {...studen};
  }


  private getNewId = () => {
    // tim so id lon nhat
      let maxId = 0;
      for (var i = 0; i < this.students.length; ++i) {
        if(this.students[i].id >= maxId){
          maxId = this.students[i].id
        }
      }
      return maxId+1;
  }

  // arrow function 
  

  keyupstudentName = (event) => {
    if(event.keyCode === 13){
      
      // tao hero moi
      let item = {
        id: this.getNewId(),
        name: event.target.value, 
        age: event.target.value,
        avatar:event.target.value
      }

      // add hero moi vao mang
      this.students.push(item);
      // lam trong the input
      event.target.value = "";
    }
  }
// xóa học sinh
  remove = (StudenId) =>{
    this.students= this.students.filter(
      (remo)=>remo.id != StudenId)
  }



}






