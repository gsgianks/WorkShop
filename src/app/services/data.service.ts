import { Injectable } from  '@angular/core';
import { Firestore, collectionData, docData, collection, doc, addDoc, deleteDoc, updateDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
    providedIn: 'root'
})
export class DataService{

    constructor(private firestore: Firestore){}

    getProducts(): Observable<Product[]>{
        const notesRef = collection(this.firestore, 'products');
        return collectionData(notesRef, { idField: 'Id'}) as Observable<Product[]>;
    }

    getProductById(id): Observable<Product>{
        const productRef = doc(this.firestore, `products/${id}`);
        return docData(productRef, {idField: 'Id' }) as  Observable<Product>;
    }

    addProduct(product: Product){
        const productRef = collection(this.firestore, 'products');
        return addDoc(productRef, product);
    }

    deleteProduct(model: Product){
        const productRef = doc(this.firestore, `products/${model.Id}`);
        return deleteDoc(productRef);
    }

    updateProduct(model: Product){
        const productRef = doc(this.firestore, `products/${model.Id}`);
        return updateDoc(productRef, { 
            Code: model.Code, 
            Name: model.Name,
            UnitPrice: model.UnitPrice,
            CodeCategory: model.CodeCategory,
            CodeUnit: model.CodeUnit
        });
    }
}