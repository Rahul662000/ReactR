import conf from '../conf/conf'
import { Client, Account, ID , Databases , Storage , Query} from "appwrite";

export class Service{

    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId) 
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    async createPost({title , slug , content , featuredImage , status , userId}){
        try{   
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title ,
                    content ,
                    featuredImage ,
                    status ,
                    userId
                }
            )
        }catch(e){
            console.log("Appwrite Service Error : " , e)
        }
    }

    async updatePost(slug , {title , content , featuredImage , status , userId}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title ,
                    content ,
                    featuredImage ,
                    status
                }
            )
        }catch(e){
            console.log("Appwrite Service Error : " , e)
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        }catch(e){
            console.log("Appwrite Service Error : " , e)
            return false;
        }
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        }
        catch(e){
            console.log("Appwrite Service Error : " , e)
            return false;
        }
    }

    async getAllPost(queries = [Query.equal("status" , "active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        }catch(e){
            console.log("Appwrite Service Error : " , e)
            return false;
        }
    }

    // File Upload Methods
    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        }catch(error){
            console.log("Appwrite Service Error : " , e)
            return false
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteDocument(
                conf.appwriteBucketId,
                fileId 
            )
            return true;
        }catch(e){
            console.log("Appwrite Service Error : " , e)
            return false;
        }
    }

    async previewFile(fileId){
        return await this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const service = new Service();

export default service 
