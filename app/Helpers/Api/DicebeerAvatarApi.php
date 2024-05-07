<?php

namespace App\Helpers\Api;

class DicebeerAvatarApi extends Api implements UserAvatarApi
{
    public const SPRITES = [
        'adventurer',
        'adventurer-neutral',
        'avataaars',
        'avataaars-neutral',
        'big-ears',
        'big-ears-neutral',
        'big-smile',
        'bottts',
        'bottts-neutral',
        'croodles',
        'croodles-neutral',
        'fun-emoji',
        'icons',
        'identicon',
        'initials',
        'lorelei',
        'lorelei-neutral',
        'micah',
        'miniavs',
        'notionists',
        'notionists-neutral',
        'open-peeps',
        'personas',
        'pixel-art',
        'pixel-art-neutral',
        'rings',
        'shapes',
        'thumbs'
    ];

    protected function getBaseUrl(): string
    {
        return 'https://api.dicebear.com/7.x/';
    }

    public function downloadAvatar()
    {
        $path = sprintf('%s/svg', collect(self::SPRITES)->random());

        return $this->get($path);
    }
}
