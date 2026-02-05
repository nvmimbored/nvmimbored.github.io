document.addEventListener('DOMContentLoaded', function() {
    const startDate = new Date(1930, 8, 1); // 8 ir septembris (jo mēneši sākas no 0)
    const today = new Date();
    
    // Aprēķinām gadu starpību
    let years = today.getFullYear() - startDate.getFullYear();
    
    // Pārbaudām, vai šī gada septembris jau ir sasniegts
    // Ja šodienas mēnesis ir mazāks par septembri VAI 
    // mēnesis ir septembris, bet diena ir mazāka par 1.
    const m = today.getMonth();
    if (m < startDate.getMonth() || (m === startDate.getMonth() && today.getDate() < startDate.getDate())) {
        years--;
    }
    
    const yearSpan = document.getElementById('dynamic-years');
    if (yearSpan) {
      yearSpan.innerText = years;
    }
  });