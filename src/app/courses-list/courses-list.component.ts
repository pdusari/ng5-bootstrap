import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  coursesObservable: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {

  }

  ngOnInit() {
    this.coursesObservable = this.getCourses('/courses');
    this.coursesObservable.subscribe(val=>{
      console.log(val);
    });
    console.log(" this.coursesObservable ", this.coursesObservable );
  }

  setCourses(){
    this.db.database.ref('/courses').push({title:"Hi There+1",description:"testing",url:"http://google.com"});
  }

  getCourses(listPath): Observable<any[]> {
    // return new Observable((observer) => {
    //   this.db.database.ref(listPath).on('value', snapshot => {
    //     observer.next(snapshot.val());
    //   }, err => {
    //     observer.error(err)
    //   });
    //   return () => {
    //     this.db.database.ref(listPath).off('value');
    //   };
    // });
    return this.db.list(listPath).valueChanges();
  }

}
