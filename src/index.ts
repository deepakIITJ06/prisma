import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// INSERTING

// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//     const res = await prisma.user.create({
//         data: {
//             userName: username,
//             password: password,
//             firstName: firstName,
//             lastName: lastName
//         },
//         select: { // basially what do you want in the "res" variable
//             id: true,
//             password: true,
//             firstName: true
//         }
//     })
//     console.log(res);
// }

// insertUser("deepak@gmail.com","1234","deepak","sinha")


// UPDATING


interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
    const res = await prisma.user.update({
        where: {id:1, userName:username,},
        data: {
            firstName,
            lastName
        }
        });
    console.log(res);
}

updateUser("deepak@gmail.com", {
    firstName: "aditya",
    lastName: "singh"
})