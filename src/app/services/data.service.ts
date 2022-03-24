import { Injectable } from  '@angular/core';
import { Firestore, collectionData, docData, collection, doc, addDoc, deleteDoc, updateDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
    providedIn: 'root'
})
export class DataService{

    constructor(private firestore: Firestore){}


    public getAll<T>(nameCollection: String): Observable<T[]>{
        const notesRef = collection(this.firestore, `${nameCollection}`);
        return collectionData(notesRef, { idField: 'Id'}) as Observable<T[]>;
    }

    // getProducts(): Observable<Product[]>{
    //     const notesRef = collection(this.firestore, 'products');
    //     return collectionData(notesRef, { idField: 'Id'}) as Observable<Product[]>;
    // }

    public getById<T>(nameCollection: String, id: String): Observable<T>{
        const productRef = doc(this.firestore, `${nameCollection}/${id}`);
        return docData(productRef, {idField: 'Id' }) as  Observable<T>;
    }

    // getProductById(id): Observable<Product>{
    //     const productRef = doc(this.firestore, `products/${id}`);
    //     return docData(productRef, {idField: 'Id' }) as  Observable<Product>;
    // }

    addProduct(product: Product){
        const productRef = collection(this.firestore, 'products');
        return addDoc(productRef, { 
            Code: product.Code, 
            Name: product.Name,
            UnitPrice: product.UnitPrice,
            CodeCategory: product.CodeCategory,
            CodeUnit: product.CodeUnit
        });
    }

    delete(nameCollection: String, id: String){
        const productRef = doc(this.firestore, `${nameCollection}/${id}`);
        return deleteDoc(productRef);
    }

    // deleteProduct(model: Product){
    //     const productRef = doc(this.firestore, `products/${model.Id}`);
    //     return deleteDoc(productRef);
    // }

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