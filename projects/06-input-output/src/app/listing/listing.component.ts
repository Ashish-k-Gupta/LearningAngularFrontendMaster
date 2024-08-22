import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  template: ` <!-- listing markup goes here --> 
    <article class="listing">
        <div class="image-parent">
          <img class="product-image" src="https://placehold.co/100x100" />
        </div>
        <section class="details">
          <p class="title"><!-- car make and model-->
            {{carInput.make}} {{carInput.model}}          
          </p>
          <hr />
          <p class="detail">
            <span>Year</span>
            <span><!-- year -->
              {{carInput.year}}
            </span>
          </p>
          <div class="detail">
            <span>Transmission</span>
            <span><!-- transmission -->
              {{carInput.transmission}}
            </span>
          </div>
          <p class="detail">
            <span>Mileage</span>
            <span><!-- miles -->
              {{carInput.miles}}
            </span>
          </p>
          <p class="detail">
            <span>Price</span>
            <span><!-- price -->
            {{carInput.price}}
            </span>
          </p>
        </section>
      </article>
      <button (click)=" handleCarSaved()">Save Car</button>

      
  `,
  styles: ``,
})
export class ListingComponent {
  @Input({
    required : true
  }) carInput!: Car

  @Output() addSavedCarList = new EventEmitter<Car>();

  handleCarSaved(){
    this.addSavedCarList.emit(this.carInput)
  }

}