function power(){
    document.getElementById('utpMat').src = 'pics/Train Station.png';
    document.getElementById('demo4').innerHTML = '"Arrival"';
}
function power2(){
    document.getElementById('utpMat').src = 'pics/utpMaintenance.png';
    document.getElementById('demo4').innerHTML = '"RJ-45 Maintenance"';
}
function power3(){
    document.getElementById('utpMat').src = 'pics/bitcoin.png';
    document.getElementById('demo4').innerHTML = '"itcoin"';
}
function power4(){
    document.getElementById('utpMat').src = 'pics/eeveeGadgets.png';
    document.getElementById('demo4').innerHTML = '"Retronics"';
}
function contactMe(){
    alert('uvornai@gmail.com')
}
function h39(){
    document.getElementById('power').innerHTML = 'Performed Data Gathering, and printing police clearances for 2 months.'
}
function h40(){
    document.getElementById('power').innerHTML = 'Implemented basic configurations of networking intermediary devices such as routers, switches, and end devices.'
}
function h41(){
    document.getElementById('power').innerHTML = 'Disassembly & assembly of laptops to change keyboards and conducted operational checks for over 3 months.'
}
function h42(){
    document.getElementById('power').innerHTML = 'Conducted photo editing of identification cards for students from public and private schools for 2 years.'
}
function h43(){
    document.getElementById('power').innerHTML = 'Performed troubleshooting Computer hardware, mobile devices, home routers for 2 years during senior high school.'
}
function h44(){
    document.getElementById('power').innerHTML = 'Demonstrated network cabling using UTP, RJ-45, cable tester, and crimping tool during senior high school.'
}
function pup(){
    document.getElementById('power').innerHTML = '';
}
/*Projects Azure seeker*/
totaX = 0

function addFunc(){
    totaX = totaX + 1;
    if (totaX == 3){
        document.getElementById('azureCenter').src = 'pics/azuresiem7.png';
    }
    else if (totaX == 2){
        document.getElementById('azureCenter').src = 'pics/azuresiem6.png';
    }
    else if (totaX == 1){
        document.getElementById('azureCenter').src = 'pics/azuresiem5.png';
    }
    else if (totaX <= 0){
        document.getElementById('azureCenter').src = 'pics/azuresiem4.png';
        totaX = 0;
    }
    else if (totaX >= 4){
        console.log('Last')
        totaX = 3;
    }
}
function minFunc(){
    totaX = totaX - 1;
    if (totaX == 3){
        document.getElementById('azureCenter').src = 'pics/azuresiem7.png';
    }
    else if (totaX == 2){
        document.getElementById('azureCenter').src = 'pics/azuresiem6.png';
    }
    else if (totaX == 1){
        document.getElementById('azureCenter').src = 'pics/azuresiem5.png';
    }
    else if (totaX <= 0 ){
        document.getElementById('azureCenter').src = 'pics/azuresiem4.png';
        totaX = 0;
    }
}
/*
Tryna keep my mind at bay
Sunflower still grows at night
Waiting for a minute till the sun's seen through my eyes
Make it down down, do-do-down
Diggy dig down, du du du du
Waiting for a minute till the sun's seen through my eyes
*/
