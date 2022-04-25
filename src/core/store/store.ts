import { Injectable } from "@angular/core";

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { ReflectMetadataKeys } from "../constants";

@Injectable()
export class Store {

	constructor(private _afs: AngularFirestore) {
	}

	public document<T>(model: T): AngularFirestoreDocument<T> {
		const path = this.getPathFromMetadata(model)
		return this._afs.doc(path)
	}

	private getPathFromMetadata<T>(target: T): string {
		return Reflect.getMetadata(ReflectMetadataKeys.STORE_PATH, target)
	}

}