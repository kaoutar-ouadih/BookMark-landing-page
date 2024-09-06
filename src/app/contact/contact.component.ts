import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email: string = "";
  isContactFormSubmitedWithErrors: boolean = false;

  onContactFormSubmit(contactForm){
    if(contactForm.valid){
      console.log(contactForm.value);
      contactForm.reset();
    }
    else{
      // Mark all controls as touched to trigger validation messages
    Object.keys(contactForm.controls).forEach(field => {
      const control = contactForm.control.get(field);
      control.markAsTouched({ onlySelf: true });
    });
    }
    
  }

}
