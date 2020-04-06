/*Codegen*/
// tslint:disable
/* eslint-disable */

import { HeroViewModel } from '../heroViewModel';
import { Hero } from '../../../../src/model/hero/hero';
import { asyncTransformer,notAsyncTransformer,asyncTransformer2 } from '../../../../../transformer/asyncTransformer';
import { HeroDetailViewModelMapper } from './heroDetailViewModelMapper';

export class HeroViewModelMapper {
      public static async toHeroViewModel(model: Hero, context?: any): Promise<HeroViewModel> {
            let result : HeroViewModel = {};
            result.id = model.id.toString();
            result.name = model.name;
            result.information = model.data;
            result.detail  = await (asyncTransformer as any)(model, context);
            if (model.detailVM) {
                  result.detailVM = await HeroDetailViewModelMapper.toHeroDetailViewModel(model.detailVM);
            }
            if (model.details) {
                  let tmp =  await model.details.map(async function(item: any ) {return await HeroDetailViewModelMapper.toHeroDetailViewModel(item); });
                  tmp.forEach(async mp => {
                       let p = await mp;
                       result.details.push(p); });
            }
            if (model.detailsVM) {
                  let tmp =  await model.detailsVM.map(async function(item: any ) {return await HeroDetailViewModelMapper.toHeroDetailViewModel(item); });
                  tmp.forEach(async mp => {
                       let p = await mp;
                       result.detailsVM.push(p); });
            }
            result.simpleArray  = await (asyncTransformer2 as any)(model, context);
            result.state = model.state;
            return result;
      }
      public static fromHeroViewModel(viewModel: HeroViewModel, context?: any): Hero {
            let result = new Hero();
            result.id = viewModel.id ? +viewModel.id : viewModel.id as any;
            result.name = viewModel.name;
            result.data = viewModel.information;
            result.detail  =  (notAsyncTransformer as any)(viewModel, context);
            if (viewModel.detailVM) {
                  result.detailVM =  HeroDetailViewModelMapper.fromHeroDetailViewModel(viewModel.detailVM);
            }
            if (viewModel.details) {
                  let tmp =  viewModel.details.map( function(item: any ) {return  HeroDetailViewModelMapper.fromHeroDetailViewModel(item); });
                  tmp.forEach( mp => {
                       let p =  mp;
                       result.details.push(p); });
            }
            if (viewModel.detailsVM) {
                  let tmp =  viewModel.detailsVM.map( function(item: any ) {return  HeroDetailViewModelMapper.fromHeroDetailViewModel(item); });
                  tmp.forEach( mp => {
                       let p =  mp;
                       result.detailsVM.push(p); });
            }
            result.simpleArray = viewModel.simpleArray;
            result.state = viewModel.state;
            return result;
      }
}
