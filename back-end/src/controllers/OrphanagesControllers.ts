import{Request, Response } from 'express'
import { getRepository } from 'typeorm';
import orphanageView from '../views/orphanages_view'
import Orphanage from '../models/Orphanage';
import * as Yup from 'yup';

export default {
  async index(req: Request, res: Response) {
    const orfananagesRepository = getRepository(Orphanage);
    const orphanages = await orfananagesRepository.find({
      relations: ['images']
    });

    return res.json(orphanageView.renderMany(orphanages));
  },
  async show(req: Request, res: Response) {
    const {id} = req.params;
    const orfananagesRepository = getRepository(Orphanage);
    const orphanage = await orfananagesRepository.findOneOrFail(id, {
      relations: ['images']
    });

    return res.json(orphanageView.render(orphanage));
  },

  async create(req: Request, res: Response){
    const {
      lat,
      lon,
      name,
      about,
      instructions,
      opening_hours,
      open_on_weekends
    } = req.body  
  
    const orphanagesReposotory = getRepository(Orphanage);
  
    const reqImages = req.files as Express.Multer.File[];

    const images = reqImages.map(images => { return { path: images.filename }});

    const data = {
      lat,
      lon,
      name,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images
    };

    const schema = Yup.object().shape({
      lat: Yup.number().required(),
      lon: Yup.number().required(),
      name: Yup.string().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required() ,
      opening_hours: Yup.string().required(),
      open_on_weekends:  Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      )
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const orphanage = orphanagesReposotory.create(data);
    
  
    await orphanagesReposotory.save(orphanage);
  
    return res.status(201).json({orphanage});
  }
}