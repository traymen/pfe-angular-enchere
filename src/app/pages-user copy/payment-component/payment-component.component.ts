import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { ServicesssService } from 'src/app/servicessss/servicesss.service';
import { Router, ActivatedRoute } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { EnchereService } from 'src/app/services/services';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-payment-component',
  templateUrl: './payment-component.component.html',
  styleUrls: ['./payment-component.component.css']
})
export class PaymentComponent implements OnInit {
  stripe: any;
  elements: any;
  card: any;
  clientSecret: string | undefined;

  constructor(private stripeService: ServicesssService,private router: Router, enchereService :EnchereService,
    private route: ActivatedRoute ,    private toastr: ToastrService
    ) { }

  async ngOnInit(): Promise<void> {
    this.stripe = await loadStripe('pk_test_51PflcyCF3qQzEx4MNiPSNq3mmrdkAny0qIKynheYmPIDpCoN8CzuDsCfdG05SOjo91yx9CTW8JyMC0VwBigNq5qs00yO6Boryb'); 
    this.elements = this.stripe.elements();
    this.card = this.elements.create('card');
    this.card.mount('#card-element');
  }
  showSuccess: boolean = false;

  async handlePayment() {
    const token = localStorage.getItem('token');

  if (!token) {
    console.error('Access token not found in local storage');
    return;
  }

  const decodedToken: any = jwtDecode(token);

 
    const amount = 1000; // Montant en cents (10 USD)
    const productName = 'Example Product';
    const email = decodedToken.email;

    this.stripeService.createPaymentIntent(amount, productName, email).subscribe(async (response) => {
      this.clientSecret = response.clientSecret;
      
      const { error, paymentIntent } = await this.stripe.confirmCardPayment(this.clientSecret, {
        payment_method: {
          card: this.card,
          billing_details: {
            email: email,
          },
        },
      });

      if (error) {
        console.error(error.message);
      } else if (paymentIntent?.status === 'succeeded') {
        /*
        console.log('Payment succeeded!');
        this.showSuccess = true; // Affiche la fenêtre de succès

        setTimeout(() => {
          this.showSuccess = false; // Affiche la fenêtre de succès
          const enchereId = this.route.snapshot.paramMap.get('idEnchere'); // Obtenez l'ID de l'enchère à partir de la route actuelle
          this.router.navigate(['/u/pagesuserr/user-participate/', enchereId]);        }, 1000);
*/
this.toastr.success(
  'Payment succeeded!',
  'Success', // Titre optionnel
  {
    positionClass: 'toast-top-right',
    timeOut: 3000 // Durée d'affichage en millisecondes (ajustez selon vos besoins)
  }
).onHidden.subscribe(() => {
  const enchereId = this.route.snapshot.paramMap.get('idEnchere');
  this.router.navigate(['/u/pagesuserr/user-participate/', enchereId]);});
        
      }
    });
  }

  
}
