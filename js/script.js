const tabletScreen = window.screen.width;

const header = document.querySelector('header'), 

      logotypeHeader = document.querySelector('.logotypeHeadline'),

      menuContainer = document.querySelector('.menuContainer-headerContainer');


      const burgerBox = document.querySelector('.containerBurMenu');



      const up = document.querySelector('.up'), center = document.querySelector('.center'), down = document.querySelector('.down');

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // код для мобильных устройств

            burgerBox.addEventListener('touchstart',()=>{

                  burgerBox.classList.toggle('menuBurgerCrossView');

                        up.classList.toggle('up_start');

                        center.classList.toggle('center_start');

                        down.classList.toggle('down_start');

                       // console.log('2');

                  if(burgerBox.classList.contains('menuBurgerCrossView')){

                        burgerBox.classList.add('menuBurgerCrossView_rev');
            
                              up.classList.add('up_rev');

                              center.classList.add('center_rev');

                              down.classList.add('down_rev');     

                             // console.log('1');

                  }
      
            })

          } else {
            // код для обычных устройств

            burgerBox.addEventListener('click',()=>{

                  burgerBox.classList.toggle('menuBurgerCrossView');

                        up.classList.toggle('up_start');

                        center.classList.toggle('center_start');

                        down.classList.toggle('down_start');

                       // console.log('2');

                  if(burgerBox.classList.contains('menuBurgerCrossView')){

                        burgerBox.classList.add('menuBurgerCrossView_rev');
            
                              up.classList.add('up_rev');

                              center.classList.add('center_rev');

                              down.classList.add('down_rev');     

                             // console.log('1');

                  }
      
            })
        }

                  

      