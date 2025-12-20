

<?php $__env->startSection('title', 'Home'); ?>

<?php $__env->startSection('content'); ?>
    <h1 class="text-3xl font-bold mb-4">Welcome to Blackjack</h1>
    <p class="text-lg text-gray-700 mb-6">
        Ready to test your luck and skills? Click the button below to start playing the game!
    </p>
    <a href="<?php echo e(route('blackjack.index')); ?>" class="px-4 py-2 bg-blue-600 text-white rounded">
        Play the Game
    </a>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\schoolopdrachten\eigen-projecten\kaartenspel\resources\views/home.blade.php ENDPATH**/ ?>