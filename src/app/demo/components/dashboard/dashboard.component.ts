import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription, debounceTime } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ServicesssService } from 'src/app/servicessss/servicesss.service';
import { ReclamationService } from 'src/app/services/services';
import { EnchereResponse } from 'src/app/modelss/enchere-response';
import { ReclamationResponse } from 'src/app/services/models';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {


    @Input() encoursCount: number ;
    @Input() termineCount: number ;
    @Input() ProblemeEnchere: number ;
    @Input() ProblemePaiement: number ;
    @Input() Problemecompteutilisateur: number ;
    @Input() Problemetechnique: number ;
    @Input() vetement: number ;
    @Input() vetementsport: number ;
    @Input() voiture: number ;
    @Input() montreetbijout: number ;
    @Input() electronique: number ;
    @Input() electromenager: number ;


    
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
    constructor(private layoutService: LayoutService ,private x:ServicesssService ,private reclamation : ReclamationService      ) {
        this.subscription = this.layoutService.configUpdate$
            .pipe(debounceTime(25))
            .subscribe((config) => {
                this.initCharts();
            });
    }

    ngOnInit() {
        this.loadEncheres();
        this.loadReclamation();
        this.initCharts();
        this.terminer();
        this.terminerr();

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

      terminerr(){
        this.x.getListEnchere2().subscribe(
            (data: EnchereResponse[]) => {
                this.vetement = data.filter(tarminer => tarminer.type === 'VETEMENT').length;
                this.vetementsport = data.filter(tarminer => tarminer.type === 'VETEMENTSPORT').length;
                this.voiture = data.filter(tarminer => tarminer.type === 'VOITURE').length;
                this.montreetbijout = data.filter(tarminer => tarminer.type === 'MONTREetBIJOUX').length;
                this.electronique = data.filter(tarminer => tarminer.type === 'ELECTRONIQUE').length;
                this.electromenager = data.filter(tarminer => tarminer.type === 'ELECTROMENAGER').length;
    
                console.log('voiture:', this.voiture);
                console.log('vetementsport:', this.vetementsport);
                console.log('vetement:', this.vetement);
                console.log('montreetbijout:', this.montreetbijout);
                console.log('electronique:', this.electronique);
                console.log('electromenager:', this.electromenager);

                this.initCharts();
    
              },
              (error) => {
                console.log('Erreur lors du chargement des enchères :', error);
              }
        );
      }
      
      a1: number; a2: number; a3: number; a4: number; a5: number; a6: number;
      b1: number; b2: number; b3: number; b4: number; b5: number; b6: number;
      c1: number; c2: number; c3: number; c4: number; c5: number; c6: number;
      d1: number; d2: number; d3: number; d4: number; d5: number; d6: number;
      e1: number; e2: number; e3: number; e4: number; e5: number; e6: number;
      f1: number; f2: number; f3: number; f4: number; f5: number; f6: number;
      g1: number; g2: number; g3: number; g4: number; g5: number; g6: number;
      h1: number; h2: number; h3: number; h4: number; h5: number; h6: number;
      i1: number; i2: number; i3: number; i4: number; i5: number; i6: number;
      j1: number; j2: number; j3: number; j4: number; j5: number; j6: number;
      k1: number; k2: number; k3: number; k4: number; k5: number; k6: number;
      l1: number; l2: number; l3: number; l4: number; l5: number; l6: number;
      
      
      // Continuez pour les autres séries de variables (d, e, f, g...)
      
      terminer() {
        this.x.getListEnchere2().subscribe(
            (data: EnchereResponse[]) => {
                // Initialiser un tableau avec 12 objets pour chaque mois
                const monthsData = Array.from({ length: 12 }, () => ({
                    vetement: 0,
                    vetementsport: 0,
                    voiture: 0,
                    montreetbijout: 0,
                    electronique: 0,
                    electromenager: 0
                }));
    
                // Remplir le tableau avec les données des enchères
                data.forEach(enchere => {
                    const month = new Date(enchere.date).getMonth(); // Obtenir le mois (0-11)
    
                    switch (enchere.type) {
                        case 'VETEMENT':
                            monthsData[month].vetement++;
                            break;
                        case 'VETEMENTSPORT':
                            monthsData[month].vetementsport++;
                            break;
                        case 'VOITURE':
                            monthsData[month].voiture++;
                            break;
                        case 'MONTREetBIJOUX':
                            monthsData[month].montreetbijout++;
                            break;
                        case 'ELECTRONIQUE':
                            monthsData[month].electronique++;
                            break;
                        case 'ELECTROMENAGER':
                            monthsData[month].electromenager++;
                            break;
                    }
                });
    
                // Stocker les résultats pour chaque type dans des sous-variables pour chaque mois
                this.a1 = monthsData[0].vetement;       // Janvier - Vetement
                this.a2 = monthsData[0].vetementsport;  // Janvier - VetementSport
                this.a3 = monthsData[0].voiture;        // Janvier - Voiture
                this.a4 = monthsData[0].montreetbijout; // Janvier - Montre et Bijoux
                this.a5 = monthsData[0].electronique;   // Janvier - Electronique
                this.a6 = monthsData[0].electromenager; // Janvier - Electromenager
    
                this.b1 = monthsData[1].vetement;       // Février - Vetement
            this.b2 = monthsData[1].vetementsport;  // Février - VetementSport
            this.b3 = monthsData[1].voiture;        // Février - Voiture
            this.b4 = monthsData[1].montreetbijout; // Février - Montre et Bijoux
            this.b5 = monthsData[1].electronique;   // Février - Electronique
            this.b6 = monthsData[1].electromenager; // Février - Electromenager

            // Continuez pour les mois restants
            this.c1 = monthsData[2].vetement;       // Mars - Vetement
            this.c2 = monthsData[2].vetementsport;  // Mars - VetementSport
            this.c3 = monthsData[2].voiture;        // Mars - Voiture
            this.c4 = monthsData[2].montreetbijout; // Mars - Montre et Bijoux
            this.c5 = monthsData[2].electronique;   // Mars - Electronique
            this.c6 = monthsData[2].electromenager; // Mars - Electromenager

            this.d1 = monthsData[3].vetement;       // Avril - Vetement
            this.d2 = monthsData[3].vetementsport;  // Avril - VetementSport
            this.d3 = monthsData[3].voiture;        // Avril - Voiture
            this.d4 = monthsData[3].montreetbijout; // Avril - Montre et Bijoux
            this.d5 = monthsData[3].electronique;   // Avril - Electronique
            this.d6 = monthsData[3].electromenager; // Avril - Electromenager

            this.e1 = monthsData[4].vetement;       // Mai - Vetement
            this.e2 = monthsData[4].vetementsport;  // Mai - VetementSport
            this.e3 = monthsData[4].voiture;        // Mai - Voiture
            this.e4 = monthsData[4].montreetbijout; // Mai - Montre et Bijoux
            this.e5 = monthsData[4].electronique;   // Mai - Electronique
            this.e6 = monthsData[4].electromenager; // Mai - Electromenager

            this.f1 = monthsData[5].vetement;       // Juin - Vetement
            this.f2 = monthsData[5].vetementsport;  // Juin - VetementSport
            this.f3 = monthsData[5].voiture;        // Juin - Voiture
            this.f4 = monthsData[5].montreetbijout; // Juin - Montre et Bijoux
            this.f5 = monthsData[5].electronique;   // Juin - Electronique
            this.f6 = monthsData[5].electromenager; // Juin - Electromenager

            this.g1 = monthsData[6].vetement;       // Juillet - Vetement
            this.g2 = monthsData[6].vetementsport;  // Juillet - VetementSport
            this.g3 = monthsData[6].voiture;        // Juillet - Voiture
            this.g4 = monthsData[6].montreetbijout; // Juillet - Montre et Bijoux
            this.g5 = monthsData[6].electronique;   // Juillet - Electronique
            this.g6 = monthsData[6].electromenager; // Juillet - Electromenager

            this.h1 = monthsData[7].vetement;       // Août - Vetement
            this.h2 = monthsData[7].vetementsport;  // Août - VetementSport
            this.h3 = monthsData[7].voiture;        // Août - Voiture
            this.h4 = monthsData[7].montreetbijout; // Août - Montre et Bijoux
            this.h5 = monthsData[7].electronique;   // Août - Electronique
            this.h6 = monthsData[7].electromenager; // Août - Electromenager

            this.i1 = monthsData[8].vetement;       // Septembre - Vetement
            this.i2 = monthsData[8].vetementsport;  // Septembre - VetementSport
            this.i3 = monthsData[8].voiture;        // Septembre - Voiture
            this.i4 = monthsData[8].montreetbijout; // Septembre - Montre et Bijoux
            this.i5 = monthsData[8].electronique;   // Septembre - Electronique
            this.i6 = monthsData[8].electromenager; // Septembre - Electromenager

            this.j1 = monthsData[9].vetement;       // Octobre - Vetement
            this.j2 = monthsData[9].vetementsport;  // Octobre - VetementSport
            this.j3 = monthsData[9].voiture;        // Octobre - Voiture
            this.j4 = monthsData[9].montreetbijout; // Octobre - Montre et Bijoux
            this.j5 = monthsData[9].electronique;   // Octobre - Electronique
            this.j6 = monthsData[9].electromenager; // Octobre - Electromenager

            this.k1 = monthsData[10].vetement;      // Novembre - Vetement
            this.k2 = monthsData[10].vetementsport; // Novembre - VetementSport
            this.k3 = monthsData[10].voiture;       // Novembre - Voiture
            this.k4 = monthsData[10].montreetbijout;// Novembre - Montre et Bijoux
            this.k5 = monthsData[10].electronique;  // Novembre - Electronique
            this.k6 = monthsData[10].electromenager;// Novembre - Electromenager

            this.l1 = monthsData[11].vetement;      // Décembre - Vetement
            this.l2 = monthsData[11].vetementsport; // Décembre - VetementSport
            this.l3 = monthsData[11].voiture;       // Décembre - Voiture
            this.l4 = monthsData[11].montreetbijout;// Décembre - Montre et Bijoux
            this.l5 = monthsData[11].electronique;  // Décembre - Electronique
            this.l6 = monthsData[11].electromenager;// Décembre - Electromenager
               
            this.initCharts();

              //  console.log('Janvier Vetement:', this.a1);
               // console.log('Janvier VetementSport:', a2);
              //  console.log('Janvier Voiture:', a3);
               // console.log('Janvier Montre et Bijoux:', a4);
               // console.log('Janvier Electronique:', a5);
               // console.log('Janvier Electromenager:', a6);
    
                // Vous pouvez maintenant utiliser ces variables pour vos graphiques ou autres logiques
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
      

        this.barData = {
            labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet','Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
            datasets: [
                {
                    label: 'VETEMENT',
                    backgroundColor: documentStyle.getPropertyValue('--primary-500'),
                    borderColor: documentStyle.getPropertyValue('--primary-500'),
                    data: [this.a1, this.b1, this.c1, this.d1, this.e1, this.f1, this.g1, this.h1, this.i1, this.j1, this.k1, this.l1],
                },
                {
                    label: 'VetementSport',
                    backgroundColor: documentStyle.getPropertyValue('--primary-200'),
                    borderColor: documentStyle.getPropertyValue('--primary-200'),
                    data: [this.a2, this.b2, this.c2, this.d2, this.e2, this.f2, this.g2, this.h2, this.i2, this.j2, this.k2, this.l2],
                },
                {
                    label: 'Voiture',
                    backgroundColor: documentStyle.getPropertyValue('--red-200'),
                    borderColor: documentStyle.getPropertyValue('--red-200'),
                    data: [this.a3, this.b3, this.c3, this.d3, this.e3, this.f3, this.g3, this.h3, this.i3, this.j3, this.k3, this.l3],
                },
                {
                    label: 'Montre et bijou',
                    backgroundColor: documentStyle.getPropertyValue('--yellow-200'),
                    borderColor: documentStyle.getPropertyValue('--yellow-200'),
                    data: [this.a4, this.b4, this.c4, this.d4, this.e4, this.f4, this.g4, this.h4, this.i4, this.j4, this.k4, this.l4],
                },
                {
                    label: 'Électronique',
                    backgroundColor: documentStyle.getPropertyValue('--green-200'),
                    borderColor: documentStyle.getPropertyValue('--green-200'),
                    data: [this.a5, this.b5, this.c5, this.d5, this.e5, this.f5, this.g5, this.h5, this.i5, this.j5, this.k5, this.l5],
                },
                {
                    label: 'Électroménager',
                    backgroundColor: documentStyle.getPropertyValue('--brown-200'),
                    borderColor: documentStyle.getPropertyValue('--brown-200'),
                    data: [this.a6, this.b6, this.c6, this.d6, this.e6, this.f6, this.g6, this.h6, this.i6, this.j6, this.k6, this.l6],
                }
            ]
        };
        this.polarData = {
            datasets: [{
                data: [
                    this.voiture,
                    this.vetement,
                    this.vetementsport,
                    this.montreetbijout,
                    this.electronique,
                    this.electromenager
                ],
                backgroundColor: [
                    documentStyle.getPropertyValue('--indigo-500'),
                    documentStyle.getPropertyValue('--purple-500'),
                    documentStyle.getPropertyValue('--teal-500'),
                    documentStyle.getPropertyValue('--orange-500'),
                    documentStyle.getPropertyValue('--red-500'),
                    documentStyle.getPropertyValue('--yellow-500')


                ],
                label: 'My dataset'
            }],
            labels: [
                'Voiture',
                'Vêtement',
                'Vêtement sport',
                'Montre et bijou',
                'Électronique',
                'Électroménager'


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
