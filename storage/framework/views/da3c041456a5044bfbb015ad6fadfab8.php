<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $__env->yieldContent('title', 'Blackjack'); ?></title>
    <?php echo app('Illuminate\Foundation\Vite')(['resources/css/app.css']); ?>
</head>
<body class="bg-gray-100 text-gray-900">
    <nav class="bg-blue-600 text-white p-4">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <a href="<?php echo e(route('home')); ?>" class="text-lg font-bold">Blackjack</a>
            <ul class="flex gap-4">
                <li><a href="<?php echo e(route('home')); ?>" class="hover:underline">Home</a></li>
                <li><a href="<?php echo e(route('blackjack.index')); ?>" class="hover:underline">Play the Game</a></li>
            </ul>
        </div>
    </nav>

    <main class="max-w-7xl mx-auto p-6">
        <?php echo $__env->yieldContent('content'); ?>
    </main>
</body>
</html><?php /**PATH C:\schoolopdrachten\eigen-projecten\kaartenspel\resources\views/layouts/app.blade.php ENDPATH**/ ?>