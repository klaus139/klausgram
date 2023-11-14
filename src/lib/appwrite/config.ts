import {Client, Account, Databases, Storage, Avatars } from 'appwrite';


export const appwriteConfig = {
    projectId: '653c0c648b9ed367cbcd',
    url: 'https://cloud.appwrite.io/v1',
    databaseId:'654e39fc4e35cfce719d',
    storageID:'654e39cb1d9bd4ed90f0',
    userCollectionId:'654e7681bfa51e14a18d',
    postCollectionId:'654e3a3d22ac157555a7',
    savesCollectionId:'654e7681bfa51e14a18d',
    
   
}
export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
