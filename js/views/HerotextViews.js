const textElement = document.getElementById('hero-text');
    const messages = [
      'Fly fast.',
      'Book fast.',
      'Travel <span class="yellow">Swift</span>.'
    ];
    let i = 0;

    setInterval(() => {
      i = (i + 1) % messages.length;
      textElement.innerHTML = messages[i];
    }, 3000);