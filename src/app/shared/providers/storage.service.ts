import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  static clearAll() {
    sessionStorage.clear()
  }

  static save(key: string, value: any): boolean {
    sessionStorage.setItem(key, JSON.stringify(value))
    return true
  }

  static get(key: string): any {
    let value = null
    if (sessionStorage.getItem(key)) {
      value = JSON.parse(sessionStorage.getItem(key)!)
    }
    return value
  }

  static delete(key: string): boolean {
    sessionStorage.removeItem(key)
    return true
  }
}
