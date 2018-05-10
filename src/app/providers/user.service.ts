import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase
  ) {

  }

registerUser(username:string,password:any,email:any){
    this.db.database.ref('/courses').push({username:username,password:password,email:email});
}


}