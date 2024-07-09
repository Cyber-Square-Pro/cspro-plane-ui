import { RootStore } from "./root.store";
import {
  action,
  observable,
  makeObservable,
  runInAction
} from "mobx";



export interface ICommandPaletteStore {

    isCommandPaletteOpen: boolean;
    isCreateProjectModalOpen: boolean

    // action
    toggleCreateProjectModal: (value?: boolean) => void;

}

export class CommandPaletteStore implements ICommandPaletteStore{

    isCommandPaletteOpen: boolean = false;
    isCreateProjectModalOpen: boolean = false;

    constructor(_rootStore: RootStore) {
        makeObservable(this, {
            isCommandPaletteOpen: observable.ref,
            isCreateProjectModalOpen: observable.ref,

            toggleCreateProjectModal: action,

        })
      }

      // Created by Mohammed Rifad on May 25th, 2024 
      // function to toggle project creation modal
      toggleCreateProjectModal = (value?: boolean) => {
     
        if (value) {
          this.isCreateProjectModalOpen = value;
        } else {
          this.isCreateProjectModalOpen = !this.isCreateProjectModalOpen;
        }
        
      };
     
}
