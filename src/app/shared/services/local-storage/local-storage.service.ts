import { Injectable } from '@angular/core';

type LocalStorageKey = 'auth' | 'userLang';
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  prefix = 'agg-admin-';

  /**
   * Gets the value stored in local storage for the specified key.
   *
   * @param key The key to retrieve the value for.
   * @returns The value stored in local storage for the specified key, or null
   * if no value is found.
   */

  // Get data from Local storage
  getItem<T = unknown>(key: LocalStorageKey): T {
    const data = window.localStorage.getItem(this.prefix + key) as string;
    return JSON.parse(data) as T;
  }

  /**
   * Sets the value for the specified key in local storage.
   *
   * @param key The key to set the value for.
   * @param value The value to store in local storage.
   */

  // set data into Local storage
  setItem(key: LocalStorageKey, value: unknown): void {
    const data = value === undefined ? '' : JSON.stringify(value);
    window.localStorage.setItem(this.prefix + key, data);
  }

  /**
   * Removes the value stored in local storage for the specified key.
   *
   * @param key The key to remove the value for.
   */
  removeItem(key: LocalStorageKey): void {
    window.localStorage.removeItem(this.prefix + key);
  }

  /**
   * Removes all items in local storage except for the user language setting.
   *
   /* Remove All Locals Except User Lang */
  clear(): void {
    window.localStorage.clear();
  }
}
