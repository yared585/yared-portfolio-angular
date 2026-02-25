import { Component, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  fm = { name: '', company: '', email: '', message: '', sent: false };

  ngAfterViewInit(): void {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('vis'), i * 80);
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.rv').forEach(el => obs.observe(el));
  }

  send(form: NgForm): void {
    if (!form.valid) return;
    this.fm.sent = true;
    setTimeout(() => {
      this.fm = { name: '', company: '', email: '', message: '', sent: false };
      form.resetForm();
    }, 3000);
  }
}
