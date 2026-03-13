import { Component, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

const SERVICE_ID  = 'service_s0pnew2';
const TEMPLATE_ID = 'template_wprwlff';
const PUBLIC_KEY  = 'V7I-B6aVl07HRrfNa';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  fm      = { name: '', company: '', email: '', message: '' };
  sent    = false;
  loading = false;
  error   = '';

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
    this.loading = true;
    this.error   = '';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      from_name:  this.fm.name,
      from_email: this.fm.email,
      company:    this.fm.company,
      message:    this.fm.message
    }, PUBLIC_KEY).then(() => {
      this.sent    = true;
      this.loading = false;
      setTimeout(() => {
        this.sent = false;
        this.fm   = { name: '', company: '', email: '', message: '' };
        form.resetForm();
      }, 3000);
    }).catch(() => {
      this.error   = 'Failed to send. Please email me directly.';
      this.loading = false;
    });
  }
}
