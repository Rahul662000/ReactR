import { use } from 'react';
import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({email , password , name}){
        try{
            console.log(email , password , name)
            const userAccount = await this.account.create(ID.unique() , email , password , name);
            console.log(userAccount)
            if(userAccount){
                console.log("Inside if")
                return await this.login({email , password})
            }else{
                return userAccount;
            }
        }catch(e){
            console.log(e.message)
            throw e;
        }
    }

    async login({email , password}){
        try{
            console.log("Login" , email , password)
            const loginsession = await this.account.createEmailPasswordSession(
                email,
                password
            )

            console.log(loginsession)

            return loginsession;
        }catch(e){
            console.log("here")
            throw e;
        }
    }

    async getCurrentUser(){
        try{
            const session = await this.account.get();
            console.log(session)
            return session;
        }catch(e){
            // throw e;
            console.log("Appwrite Login Error : " , e)
        }

        return null;
    }

    async logout(){
        try{
            await this.account.deleteSessions()
        }
        catch(e){

        }
    }
}

const authService = new AuthService();

export default authService;