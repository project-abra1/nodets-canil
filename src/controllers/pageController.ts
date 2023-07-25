import { Request, Response } from "express";
import { createMenusObject } from "../helpers/createMenuObject";
import { Pet } from "../models/pet";


export const home = (req:Request, res:Response)=>{
    let list = Pet.getAll();

    res.render('pages/page',{
        menu : createMenusObject('all'),
        banner: {
            title: 'All animals',
            background: 'allanimals.jpg'
        },
        list

    });
}

export const dogs = (req:Request, res:Response)=>{
    let list = Pet.getFromType('dog');

    res.render('pages/page',{
        menu : createMenusObject('dog'),
        banner: {
            title: 'Dogs',
            background: 'banner_dog.jpg'
        },
        list
    });
}

export const cats = (req:Request, res:Response)=>{
    let list = Pet.getFromType('cat');

    res.render('pages/page',{
        menu : createMenusObject('cat'),
        banner: {
            title: 'Cats',
            background: 'banner_cat.jpg'
        },
        list
    });
}

export const fishes = (req:Request, res:Response)=>{
    let list = Pet.getFromType('fish');

    res.render('pages/page',{
        menu : createMenusObject('fish'),
        banner: {
            title: 'Fishes',
            background: 'banner_fish.jpg'
        },
        list
    });
}