


<?php $__env->startSection('title', 'Blackjack'); ?>

<?php $__env->startSection('content'); ?>
    <h1 class="text-3xl font-bold mb-4">Blackjack</h1>

    <div class="flex gap-3 mb-6">
        <a href="<?php echo e(route('blackjack.start')); ?>" class="px-4 py-2 bg-blue-600 text-white rounded">Start</a>
        <a href="<?php echo e(route('blackjack.hit')); ?>" class="px-4 py-2 bg-emerald-600 text-white rounded">Hit</a>
        <a href="<?php echo e(route('blackjack.result')); ?>" class="px-4 py-2 bg-amber-600 text-white rounded">Stand / Resultaat</a>
    </div>

    <?php
        $playerScore = isset($game) ? $game->calculateScore($game->playerHand) : 0;
        $dealerScore = isset($game) ? $game->calculateScore($game->dealerHand) : 0;
    ?>

    <?php if(isset($game)): ?>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-4 bg-white rounded shadow">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="font-semibold">Dealer</h2>
                    <span class="text-sm score score--flash">Score: <?php echo e($dealerScore); ?></span>
                </div>
                <div class="flex flex-wrap gap-2">
                    <?php $__currentLoopData = $game->dealerHand; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $card): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <?php if($card): ?>
                        <span class="card card--deal" style="animation-delay: <?php echo e($loop->index * 120); ?>ms">
                            <?php echo e($card->rank); ?> <?php echo e($card->suit); ?>

                        </span>
                        <?php endif; ?>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>
            </div>

            <div class="p-4 bg-white rounded shadow">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="font-semibold">Jij</h2>
                    <span class="text-sm score score--flash">Score: <?php echo e($playerScore); ?></span>
                </div>
                <div class="flex flex-wrap gap-2">
                    <?php $__currentLoopData = $game->playerHand; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $card): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <?php if($card): ?>
                        <span class="card card--deal" style="animation-delay: <?php echo e($loop->index * 120); ?>ms">
                            <?php echo e($card->rank); ?> <?php echo e($card->suit); ?>

                        </span>
                        <?php endif; ?>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>
            </div>
        </div>
    <?php else: ?>
        <p class="text-gray-700">Klik op Start om een nieuw spel te beginnen.</p>
    <?php endif; ?>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\schoolopdrachten\eigen-projecten\kaartenspel\resources\views/blackjack/index.blade.php ENDPATH**/ ?>