import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-vide-message',
  templateUrl: './vide-message.component.html',
  styleUrl: './vide-message.component.css'
})
export class VideMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById('action_menu_btn')?.addEventListener('click', () => {
      const actionMenu = document.querySelector('.action_menu');
      if (actionMenu) {
        actionMenu.classList.toggle('active');
      }
    });
  }
}
