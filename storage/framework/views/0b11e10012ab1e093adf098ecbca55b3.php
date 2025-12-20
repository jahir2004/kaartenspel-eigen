<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blackjack</title>
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <?php echo app('Illuminate\Foundation\Vite')->reactRefresh(); ?>
    <?php echo app('Illuminate\Foundation\Vite')(['resources/css/app.css', 'resources/js/app.tsx']); ?>
</head>
<body class="bg-gray-900">
    <div id="app"></div>
</body>
</html>
<?php /**PATH C:\schoolopdrachten\eigen-projecten\kaartenspel\resources\views/blackjack/game.blade.php ENDPATH**/ ?>