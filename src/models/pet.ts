type PetType = 'dog' | 'cat' | 'fish';


type Pet = {
    type: PetType,
    image: string,
    name: string,
    color: string,
    sex: 'Male' | 'Female'
};

const dataBase: Pet[] = [
    {
        type: 'dog',
        image: 'pastor-alemao.jpg',
        name: 'Pastor-alemão',
        color: 'Yellow and Black',
        sex: 'Male'
    },
    {
        type: 'dog',
        image: 'labrador.jpg',
        name: 'Labrador-retriever',
        color: 'White',
        sex: 'Male'
    },
    {
        type: 'dog',
        image: 'zwergspitz.jpg',
        name: 'Zwergspitz',
        color: 'Yellow',
        sex: 'Female'
    },
    {
        type: 'dog',
        image: 'husky.jpg',
        name: 'Husky Siberiano',
        color: 'White and Black',
        sex: 'Male'
    },
    {
        type: 'dog',
        image: 'golden.jpg',
        name: 'Golden Retriever',
        color: 'Yellow',
        sex: 'Male'
    },
    {
        type: 'dog',
        image: 'poodle.jpg',
        name: 'Poodle',
        color: 'White',
        sex: 'Female'
    },
    {
        type: 'dog',
        image: 'bulldog.jpg',
        name: 'Bulldog',
        color: 'White and Yellow',
        sex: 'Male'
    },
    {
        type: 'cat',
        image: 'persa.jpg',
        name: 'Persa',
        color: 'Yellow',
        sex: 'Male'
    },
    {
        type: 'cat',
        image: 'mainecoon.jpg',
        name: 'Maine Coon',
        color: 'Black and White',
        sex: 'Male'
    },
    {
        type: 'cat',
        image: 'bengal.jpg',
        name: 'Bengal',
        color: 'White, Black and Yellow',
        sex: 'Female'
    },
    {
        type: 'cat',
        image: 'siames.jpg',
        name: 'Siamês',
        color: 'Yellow and Black',
        sex: 'Male'
    },
    {
        type: 'cat',
        image: 'sphynx.jpg',
        name: 'Sphynx',
        color: 'White',
        sex: 'Male'
    },
    {
        type: 'fish',
        image: 'neon.jpg',
        name: 'Tetra Neon',
        color: 'Red and Blue',
        sex: 'Male'
    },
    {
        type: 'fish',
        image: 'matogrosso.jpg',
        name: 'Mato Grosso',
        color: 'Oranje',
        sex: 'Male'
    },
    {
        type: 'fish',
        image: 'limpavidro.jpg',
        name: 'Limpa Vidro',
        color: 'Green and White',
        sex: 'Male'
    },
    {
        type: 'fish',
        image: 'tanictis.jpg',
        name: 'Tanictis',
        color: 'Red',
        sex: 'Male'
    },
    {
        type: 'fish',
        image: 'acara.jpg',
        name: 'Acará Bandeira',
        color: 'Black',
        sex: 'Male'
    },
];


export const Pet = {
    getAll: (): Pet[] =>{
        return dataBase;
    },
    getFromType: (type: PetType): Pet[] => {
        return dataBase.filter(item => {
            if(item.type === type) {
                return true;
            } else {
                return false;
            }
        });
    },
    getFromName: (name: string): Pet[] => {
        return dataBase.filter(item => {

            if(item.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1) {
                return true;
            } else {
                return false;
            }
        })
    }
};