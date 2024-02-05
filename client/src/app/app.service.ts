import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private firestore: AngularFirestore) {}
  createCollection(collectionName: string, data: any) {
    this.firestore.collection(collectionName).doc().set(data);
  }
}
