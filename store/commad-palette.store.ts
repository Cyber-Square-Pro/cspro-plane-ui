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
    isCreateIssueModalOpen: boolean

    // action
    toggleCreateProjectModal: (value?: boolean) => void;
    toggleCreateIssueModal: (value?: boolean) => void;

}

export class CommandPaletteStore implements ICommandPaletteStore{

    isCommandPaletteOpen: boolean = false;
    isCreateProjectModalOpen: boolean = false;
    isCreateIssueModalOpen: boolean = false;

    constructor(_rootStore: RootStore) {
        makeObservable(this, {
            isCommandPaletteOpen: observable.ref,
            isCreateProjectModalOpen: observable.ref,
            isCreateIssueModalOpen: observable.ref,

            toggleCreateProjectModal: action,
            toggleCreateIssueModal: action,

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
        console.log('value',   this.isCreateProjectModalOpen )
      };

      // Created by Nisha J. on Jun 19th, 2024 
      // function to toggle issue creation modal
      toggleCreateIssueModal = (value?: boolean) => {
          
        if (value) {
          this.isCreateIssueModalOpen = value;
        } else {
          this.isCreateIssueModalOpen = !this.isCreateIssueModalOpen;
        }
        console.log('value',   this.isCreateIssueModalOpen )
      };     
}