sudo apt install php8.1-fpm
sudo apt install php8.1-common php8.1-json php8.1-bcmath php8.1-mysql php8.1-xml php8.1-curl php8.1-gd php8.1-imagick php8.1-gmp php8.1-gd php8.1-mbstring php8.1-igbinary php8.1-zip php8.1-redis php8.1-intl -y



<section class="price-grid section-padding" data-scroll-index="1">
    <div class="container">
        <div class="row owl-carousel ltr">
@foreach ($tickers as $item)
    <div class="card">
        <div class="card-header">
            <div class="media">
                <span><img class="img-market pr-1 pt-1 pb-1" style="width: auto !important" src="/storage/images/coin-icons/__{{ $item['base_coin']}}.png"></span>
                <div class="media-body">{{ $item['symbol']}}</div>
            </div>
        </div>
        <div class="card-body" style="position: relative;">
            <h3>{{ $item['last_price']}}</h3>
            <span class="font-size-20">{{ $item['change']}} %</span>
            <p>{{ $item['baseVolume']}}</p>
        </div>
    </div>
@endforeach
</div>
</div>
</section>


<div id="ali"></div>
<script>
    let ali = {!! json_encode($tickers) !!};
    const alidiv = document.getElementById("ali");
    ali.forEach(element => {
        alidiv.add

    });
</script>
