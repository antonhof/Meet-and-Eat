import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Workspace } from '../../_models/workspace';
import { FirebaseWorkspaceService } from '../../_services/firebase-workspace.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FirebaseRestaurantService } from '../../_services/firebase-restaurant.service';
import { Restaurant } from '../../_models/restaurant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  key: string;
  workspace$;
  restaurants$: Observable<Restaurant[]>;
  rForm: FormGroup
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FirebaseWorkspaceService,
    private restaurantService: FirebaseRestaurantService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.workspace$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>   
        this.service.getWorkspace(params.get('key')))
    );
    this.route.params.subscribe(params => {
      this.key = params['key'];
    });
    this.rForm = this.formBuilder.group({
      spaceName: ['', Validators.required]
    });
    this.restaurantService.initRestaurants(this.key);  
    this.loadRestaurants()
  }

get f() {return this.rForm.controls;}

  private loadRestaurants() {
    this.restaurants$ = this.restaurantService.getAll();
    console.log("Restaurants geladen");
  }

  createRestaurant() {
    this.submitted = true;
    if (this.rForm.invalid) {
      return;
    }
    this.restaurantService.create(this.f.spaceName.value);
  }
 
  choseRestaurant(key: string, name: string, score: number, isChecked: boolean) {
    console.log(isChecked);
    this.restaurantService.update(key, name, score, isChecked);
  }
}
