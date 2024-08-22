import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";


@Component({
    selector: 'app-dynamic',
    imports: [CommonModule],
    standalone: true,
    template: `
        <section>
            <p>We are trying dynamic component here. Using (id:) feature to route the component dynamically</p>
            <p>Let's see how this works.</p>
        </section>
        <section>
            <p>{{this.productList[productId].product}}</p>
            <ul>
                <li>{{this.productList[productId].price}}</li>
                <li>{{this.productList[productId].description}}</li>
            </ul>
        </section>
    `
})

export class DynamicComponent{
    productId = 0;

    @Input() set id(value: number){
        this.productId = value;
    }

    productList =[
        {
            product: 'Porsche Taycan',
            price: '300k', 
            description: 'This is a cool car'
        },
        
        {
            product: 'Porsche 911',
            price: '200k', 
            description: 'This is a coolest car'
        },
        {
            product: 'Porsche 718 Cayman',
            price: '250k', 
            description: 'This is a fast car'
        },
    ]
}