import {GenerateView, IgnoreViewModel, ViewModelName, ViewModelType} from "../../../../src/index";
import {HeroDetail} from "./heroDetail";
import {HeroDetailViewModel} from "../../../dist/_autogenerated_viewmodels/heroes/heroDetailViewModel";
import { States } from "../../../../src/tasks/model/stateModel";
import { asyncTransformer, notAsyncTransformer } from "../../../../transformer/asyncTransformer";

@GenerateView({
    "model": "HeroViewModel",
    "filePath": "./test/dist/_autogenerated_viewmodels/heroes",
    "mapperPath": "./test/dist/_autogenerated_viewmodels/heroes/mappers"})
@GenerateView({
    "model": "HeroViewModel1",
    "filePath": "./test/dist/_autogenerated_viewmodels/heroes",
    "mapperPath": "./test/dist/_autogenerated_viewmodels/heroes/mappers"})
export class Hero {
    @ViewModelType({"type": "string"})
    @IgnoreViewModel("HeroViewModel1")
    public id?: number;


    public name: string;

    @ViewModelName("information", "HeroViewModel")
    public data: string;

    @IgnoreViewModel()
    public detailId?: number;

    @ViewModelType({
    "modelName": "HeroViewModel",
    "transformer": { "toView" : { "function": asyncTransformer },
                    "fromView": { "function": notAsyncTransformer }},
    "type": HeroDetail})
    public detail: HeroDetail;

    @ViewModelType({"type": HeroDetailViewModel})
    @IgnoreViewModel("HeroViewModel1")
    public detailVM: HeroDetail;

    @ViewModelType({
    "type": "HeroDetailViewModel[]",
    "modelName": "HeroViewModel"})
    @ViewModelType({
    "type": "HeroDetailViewModel[]",
    "modelName": "HeroViewModel1"})
    public details: HeroDetail[];

    @ViewModelType({"type": "HeroDetailViewModel[]"})
    public detailsVM: HeroDetail[];

    public simpleArray: number[];

    public state: States;

}