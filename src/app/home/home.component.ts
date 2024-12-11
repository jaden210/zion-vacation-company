import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Destination {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface Category {
  id: number;
  name: string;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    FormsModule,
    NgFor
  ]
})
export class HomeComponent implements OnInit {
  destinations: Destination[] = [
    {
      id: 1,
      name: 'New York',
      price: 200,
      imageUrl: 'assets/images/newyork.jpg'
    },
    {
      id: 2,
      name: 'Paris',
      price: 180,
      imageUrl: 'assets/images/paris.jpg'
    },
    {
      id: 3,
      name: 'Tokyo',
      price: 150,
      imageUrl: 'assets/images/tokyo.jpg'
    }
  ];

  categories: Category[] = [
    {
      id: 1,
      name: 'Stays',
      imageUrl: 'assets/images/stays.jpg'
    },
    {
      id: 2,
      name: 'Experiences',
      imageUrl: 'assets/images/experiences.jpg'
    }
  ];

  searchQuery: string = '';

  onSearch(): void {
    // Implement search functionality
    console.log('Searching for:', this.searchQuery);
  }

  ngOnInit(): void {
    // Add any initialization logic here
  }
}
