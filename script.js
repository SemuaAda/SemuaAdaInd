$(document).ready(() => {
    $(window).scroll(() => {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            $('header').addClass('scrolled');
            $('header .navbar').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
            $('header .navbar').removeClass('scrolled');
        }
    });

    $('header .menu-toggle').click(() => {
        $('header .navbar').toggleClass('slide');
    });

    $('#login').click(() => {
        $('.overlay #loginBox').addClass('loginPop');
        $('.overlay').addClass('loginPop');
        $(document.body).addClass('loginPop');
    });

    $('#register').click(() => {
        $('.overlay #registerBox').addClass('regisPop');
        $('.overlay').addClass('regisPop');
        $(document.body).addClass('regisPop');
    });

    $('.overlay .popup #loginLink').click(() => {
        $('.overlay #loginBox').addClass('loginPop');
        $('.overlay #registerBox').removeClass('regisPop');
    });

    $('.overlay .popup #registerLink').click(() => {
        $('.overlay #registerBox').addClass('regisPop');
        $('.overlay #loginBox').removeClass('loginPop');
    });

    const close = document.querySelectorAll('.overlay .popup i');
    const registerPopup = document.querySelector('.overlay #registerBox');
    const loginPopup = document.querySelector('.overlay #loginBox');
    const overlay = document.querySelector('.overlay');

    close.forEach(el => {
        el.addEventListener('click', () => {
            registerPopup.classList.remove('regisPop');
            loginPopup.classList.remove('loginPop');
            overlay.classList.remove('loginPop');
            overlay.classList.remove('regisPop');
            document.body.classList.remove('regisPop');
            document.body.classList.remove('loginPop');
        });
    });


    // Copy to Clipboard
    copyToClipboard = (el) => {
        let $temp = $('<input>');
        $('body').append($temp);
        $temp.val($(el).text()).select();
        document.execCommand('copy');
        $temp.remove();
    }

    $('.motivation-page .motivation-box .btn').click(() => {
        $('.motivation-page .motivation-box .copy-text').removeClass('removed');
        $('.motivation-page .motivation-box .copied').addClass('removed');
    });

    $('.motivation-page .motivation-box .copy').click(() => {
        copyToClipboard($('.motivation-list'));
        $('.motivation-page .motivation-box .copy-text').addClass('removed');
        $('.motivation-page .motivation-box .copied').removeClass('removed');
    });

    // Motivation Generator
    const quotes = [
        '"Cara menjadi UMKM yang baik dan benar."',
        '"Cara menjadi kustomer yang baik dan benar."',
        '"Jangan menyerah pada mimpimu, atau mimpimu akan menyerah padamu."',
        '"Pak Mawan UMKM sukses membuka jasa di daerah Gajahmada."',
        '"Kebanyakan orang gagal, bukan karena kurangnya keinginan, tetapi, karena kurangnya komitmen."',
        '"Bagaimana cara ngesol sepatu?"',
        '"Beberapa orang ingin itu terjadi, beberapa berharap itu akan terjadi, yang lainnya membuat itu terjadi."',
        '"Semua kemajuan terjadi di luar zona nyaman."',
        '"Gimana sih cara mengupgrade diri menjadi lebih baik?"',
        '"Tubuh yang lemah melemahkan pikiran."',
        '"Tubuh manusia adalah gambaran terbaik dari jiwa manusia."',
        '"Jam terus berdetak. Apakah kamu menjadi orang yang kamu inginkan?"',
        '"Fokus. Fokus. Fokus."',
        '"Disiplin adalah jembatan antara tujuan dan pencapaian."',
        '"Tindakan adalah kunci dasar untuk semua kesuksesan."',
        '"Merasa nyaman dengan menjadi tidak nyaman!"',
    ];

    let currentIndex = 0;
    let shuffledQuotes = shuffleArray(quotes);

    $('#button').click(() => {
        if (currentIndex >= quotes.length) {
            let randomNumber = Math.floor(Math.random() * (shuffledQuotes.length));
            $('.motivation-list').html(shuffledQuotes[randomNumber]);
        } else {
            $('.motivation-list').html(quotes[currentIndex]);
            currentIndex++;
        }
    });

    function shuffleArray(array) {
        let currentIndex = array.length;
        let temporaryValue, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    // Pop-Up Chat Box
    $('.chat i, .chat .chat-box i').click(() => {
        $('.chat .chat-box').toggleClass('show');
    });
});
