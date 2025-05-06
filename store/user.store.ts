import { IUser, IUserSettings } from "@/types/user";
import { RootStore } from "./root.store";
import {
  action,
  observable,
  makeObservable,
  runInAction
} from "mobx";
import { UserService } from "@/services/user.service";


export interface IUserStore {
  currentUser: IUser | null;
  currentUserEmail: string | null;
  currentUserSettings: IUserSettings | null;

  updateUserOnBoard: () => Promise<void>;
  setCurrentUserEmail: (email: string) => void;
  fetchCurrentUserSettings: () => Promise<IUserSettings>;
  updateCurrentUser: (data: Partial<IUser>) => Promise<IUser>;
  fetchCurrentUser: () => Promise<IUser>;
  updateUserOnLogout: () => Promise<void>;
  
}

export class UserStore implements IUserStore {

  currentUser: IUser | null = null;
  currentUserEmail: string | null = null;
  userService;
  currentUserSettings: IUserSettings | null = null;


  constructor(_rootStore: RootStore) {
    makeObservable(this, {
      currentUser: observable.ref,
      updateUserOnBoard: action,
      currentUserEmail: observable,
      currentUserSettings: observable.ref,

    })
    this.userService = new UserService()
    // this.loadEmailFromLocalStorage();
  }

  setCurrentUserEmail = (email: string) => {
    localStorage.setItem('currentUserEmail', email);
  }

  fetchCurrentUser = async () => {
    try {
      const response = await this.userService.currentUser();
      if (response) {
        runInAction(() => {
          this.currentUser = response;
          // this.currentUserEmail = response.email
        });
      }
      return response;
    } catch (error) {
      runInAction(() => {

      });
      throw error;
    }
  };

  // setCurrentUserEmail = (email: string) =>{
  //   this.currentUserEmail = email;
  //   // Persist email to local storage when it's updated
  //   this.persistEmailToLocalStorage();
  // }

  // Method to persist the email to local storage
  persistEmailToLocalStorage = () => {
    localStorage.setItem('currentUserEmail', this.currentUserEmail || '');
  }

  updateCurrentUser = async (data: Partial<IUser>) => {
    try {
      runInAction(() => {
        this.currentUser = {
          ...this.currentUser,
          ...data,
        } as IUser;
      });

      console.log('in service', data)
      const response = await this.userService.updateUser(data);

      runInAction(() => {
        this.currentUser = response;
      });
      return response;
    } catch (error) {


      throw error;
    }
  };

  //   loadEmailFromLocalStorage = () => {
  //     const email = localStorage.getItem('currentUserEmail');
  //     if (email) {
  //         this.currentUserEmail = email;
  //     }
  // }

  updateUserOnBoard = async () => {
    console.log('updatimg user onboard')
    try {
      runInAction(() => {
        this.currentUser = {
          ...this.currentUser,
          is_onboarded: true,
        } as IUser;
      });

      const user = this.currentUser ?? undefined;

      if (!user) return;

      await this.userService.updateUserOnBoard({ userRole: user.role }, user);
    } catch (error) {
      throw error;
    }
  };

  fetchCurrentUserSettings = async () => {
    try {
      const response = await this.userService.currentUserSettings();
      console.log('user *************************************', response)
      if (response) {
        runInAction(() => {
          this.currentUserSettings = response;
        });
      }
      return response;
    } catch (error) {
      throw error;
    }
  };

  //Updates the user data when logged out.
  updateUserOnLogout = async () => {
    try {    
      runInAction(() => {
        this.currentUser = null;
        this.currentUserSettings=null;
      });
    } catch (error) {
      throw error;
    }
  };
  
}

