import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  @ViewChild('name') featureName : ElementRef;
  @ViewChild('description') featureDescription : ElementRef;
  @ViewChild('imgSrc') featureImgSource : ElementRef;
  
  features = [{name: "Bookmark in one click", description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.", imgSrc : "../../assets/images/illustration-features-tab-1.svg"},
    {name: "Intelligent search", description: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.", imgSrc : "../../assets/images/illustration-features-tab-2.svg"},
    {name: "Share your bookmarks", description: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.", imgSrc : "../../assets/images/illustration-features-tab-3.svg"}
  ]
  id: string;

  onFeatureClick(feature: HTMLElement){
    console.log(feature.id);
    if(feature.id == "speedySearch"){
      this.id = "speedySearch";
      this.featureName.nativeElement.textContent = this.features[1].name;
      this.featureDescription.nativeElement.textContent = this.features[1].description;
      this.featureImgSource.nativeElement.src = this.features[1].imgSrc;
    }
    else if(feature.id == "easyShare"){
      this.id = "easyShare";
      this.featureName.nativeElement.textContent = this.features[2].name;
      this.featureDescription.nativeElement.textContent = this.features[2].description;
      this.featureImgSource.nativeElement.src = this.features[2].imgSrc;
    }
    else{
      this.id = "simpleBookMark";
      this.featureName.nativeElement.textContent = this.features[0].name;
      this.featureDescription.nativeElement.textContent = this.features[0].description;
      this.featureImgSource.nativeElement.src = this.features[0].imgSrc;
    }
  }
}
