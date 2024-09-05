import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, debounceTime } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { EnchereResponse } from 'src/app/modelss/enchere-response';
import { ReclamationResponse } from 'src/app/services/models';
import { ReclamationService } from 'src/app/services/services';
import { ServicesssService } from 'src/app/servicessss/servicesss.service';

@Component({
    templateUrl: './chartsdemo.component.html'
})
export class ChartsDemoComponent implements OnInit, OnDestroy {
    type?: 'ProblemeEnchere' | 'ProblemePaiement' | 'Problemecompteutilisateur' | 'Problemetechnique';

    @Input() encoursCount: number ;
    @Input() termineCount: number ;
    @Input() ProblemeEnchere: number ;
    @Input() ProblemePaiement: number ;
    @Input() Problemecompteutilisateur: number ;
    @Input() Problemetechnique: number ;

    
        lineData: any;

    barData: any;
   
    pieData: any;
    reclaamation :any;
    polarData: any;

    radarData: any;

    lineOptions: any;

    barOptions: any;

    pieOptions: any;

    polarOptions: any;

    radarOptions: any;
   // encoursCount: number ;
   // termineCount: number ;
    subscription: Subscription;
    constructor(private layoutService: LayoutService ,private x:ServicesssService ,private reclamation : ReclamationService        ) {
        this.subscription = this.layoutService.configUpdate$
            .pipe(debounceTime(25))
            .subscribe((config) => {
                this.initCharts();
            });
    }

    ngOnInit() {
        this.loadEncheres();
        this.loadReclamation()
        this.initCharts();
    }
    loadEncheres() {
        this.x.getListEnchere().subscribe(
          (data: EnchereResponse[]) => {
            this.encoursCount = data.filter(enchere => enchere.etat === 'Encours').length;
            this.termineCount = data.filter(enchere => enchere.etat === 'Terminer').length;
          
            console.log('Nombre d\'enchères en cours:', this.encoursCount);
            console.log('Nombre d\'enchères terminées:', this.termineCount); 
            this.initCharts();

          },
          (error) => {
            console.log('Erreur lors du chargement des enchères :', error);
          }
        );
      }

      loadReclamation() {
        this.reclamation.getListReclamationn().subscribe(
          (data: ReclamationResponse[]) => {
            this.ProblemeEnchere = data.filter(reclamtion => reclamtion.type === 'ProblemeEnchere').length;
            this.ProblemePaiement = data.filter(reclamtion => reclamtion.type === 'ProblemePaiement').length;
            this.Problemecompteutilisateur = data.filter(reclamtion => reclamtion.type === 'Problemecompteutilisateur').length;
            this.Problemetechnique = data.filter(reclamtion => reclamtion.type === 'Problemetechnique').length;

            console.log('ProblemeEnchere:', this.ProblemeEnchere);
            this.initCharts();

          },
          (error) => {
            console.log('Erreur lors du chargement des enchères :', error);
          }
        );
      }
    initCharts() {
        const documentStyle = getComputedStyle(document.documentElement);
    
        this.pieData = {
            labels: ['Terminer',  'Encours'],
            datasets: [
                {
                    data: [this.termineCount,this.encoursCount ],
                    backgroundColor: [
                        '#FF0000',
                        '#00FF00'  
                    ],
                    hoverBackgroundColor: [
                        '#CC0000', 
                        '#00CC00' 
                    ]
                }]
        };

        this.reclaamation = {
            labels: ['Probleme Enchere', 'Probleme Paiement', 'Probleme compte utilisateur', 'Probleme technique'],
            datasets: [
                {
                    data: [this.ProblemeEnchere, this.ProblemePaiement, this.Problemecompteutilisateur, this.Problemetechnique],
                    backgroundColor: [
                        '#FF0000',  // Rouge pour ProblemeEnchere
                        '#00FF00',  // Vert pour ProblemePaiement
                        '#0000FF',  // Bleu pour Problemecompteutilisateur
                        '#FFFF00'   // Jaune pour Problemetechnique
                    ],
                    hoverBackgroundColor: [
                        '#CC0000',  // Rouge foncé pour ProblemeEnchere au survol
                        '#00CC00',  // Vert foncé pour ProblemePaiement au survol
                        '#0000CC',  // Bleu foncé pour Problemecompteutilisateur au survol
                        '#CCCC00'   // Jaune foncé pour Problemetechnique au survol
                    ]
                }
            ]
        };
        

    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    enchereList: EnchereResponse [];
  
    
    
}
