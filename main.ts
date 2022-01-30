namespace SpriteKind {
    export const Bomb = SpriteKind.create()
    export const Superenemy = SpriteKind.create()
    export const Superfood = SpriteKind.create()
    export const Button = SpriteKind.create()
    export const Button2 = SpriteKind.create()
    export const Thing = SpriteKind.create()
}
namespace StatusBarKind {
    export const Wave = StatusBarKind.create()
    export const Wave2 = StatusBarKind.create()
}
function LevelControl () {
    if (Level == 0) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffff7777fffffffffffff77777777777777ffff777777777777777ffff7777777777777fffff777ffffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffff77777ffffffffffff77777777777777ffff777777777777777ffff7777777777777fffff7777fffffff777fff77777777777fffff777777777777fffffffffffffffffffffffffffffff
            ffffffffffff7777777ffffffffff77777777777777ffff777777777777777ffff7777777777777fffff7777fffffff777fff77777777777fffff777777777777fffffffffffffffffffffffffffffff
            ffffffffffff77777777fffffffff777fffffffffffffff777ffffffffffffffff777fffffffffffffff77777ffffff777fff77777777777fffff777777777777fffffffffffffffffffffffffffffff
            ffffffffffff7777777777fffffff777fffffffffffffff777ffffffffffffffff777fffffffffffffff77777ffffff777fff777fffffffffffff777ffffffffffffffffffffffffffffffffffffffff
            ffffffffffff777ff77777fffffff777fffffffffffffff777ffffffffffffffff777fffffffffffffff777777fffff777fff777fffffffffffff777ffffffffffffffffffffffffffffffffffffffff
            ffffffffffff777ffff777fffffff777fffffffffffffff777ffffffffffffffff777fffffffffffffff777777fffff777fff777fffffffffffff777ffffffffffffffffffffffffffffffffffffffff
            ffffffffffff777ffff7777ffffff777fffffffffffffff777ffffffffffffffff777fffffffffffffff777777fffff777fff777fffffffffffff777ffffffffffffffffffffffffffffffffffffffff
            ffffffffffff777ffff7777ffffff777fffffffffffffff777ffffffffffffffff777fffffffffffffff7777777ffff777fff777fffffffffffff777ffffffffffffffffffffffffffffffffffffffff
            ffffffffffff777fffff7777fffff777fffffffffffffff777ffffffffffffffff777fffffffffffffff7777777ffff777fff777fffffffffffff777ffffffffffffffffffffffffffffffffffffffff
            ffffffffffff777fffff7777fffff777fffffffffffffff777ffffffffffffffff777fffffffffffffff777f7777fff777fff777fffffffffffff777ffffffffffffffffffffffffffffffffffffffff
            ffffffffffff777ffffff777fffff77777777777777ffff777ffffffffffffffff777fffffffffffffff777f7777fff777fff777fffffffffffff777ffffffffffffffffffffffffffffffffffffffff
            ffffffffffff777fffffff777ffff77777777777777ffff777777777777777ffff777fffffffffffffff777ff7777ff777fff777fffffffffffff777777777777fffffffffffffffffffffffffffffff
            ffffffffffff777fffffff777ffff77777777777777ffff777777777777777ffff7777777777777fffff777ff7777ff777fff777fffffffffffff777777777777fffffffffffffffffffffffffffffff
            ffffffffffff777fffffff777ffff777fffffffffffffff777777777777777ffff7777777777777fffff777fff7777f777fff777fffffffffffff777777777777fffffffffffffffffffffffffffffff
            ffffffffffff777fffffff777ffff777fffffffffffffff777ffffffffffffffff7777777777777fffff777fff7777f777fff777fffffffffffff777ffffffffffffffffffffffffffffffffffffffff
            ffffffffffff777fffffff777ffff777fffffffffffffff777ffffffffffffffff777fffffffffffffff777ffff7777777fff777fffffffffffff777ffffffffffffffffffffffffffffffffffffffff
            ffffffffffff777fffffff777ffff777fffffffffffffff777ffffffffffffffff777fffffffffffffff777ffff7777777fff777fffffffffffff777ffffffffffffffffffffffffffffffffffffffff
            ffffffffffff777fffff77777ffff777fffffffffffffff777ffffffffffffffff777fffffffffffffff777fffff777777fff777fffffffffffff777ffffffffffffffffffffffffffffffffffffffff
            ffffffffffff777ffff777777ffff777fffffffffffffff777ffffffffffffffff777fffffffffffffff777fffff777777fff777fffffffffffff777ffffffffffffffffffffffffffffffffffffffff
            ffffffffffff777ff7777777fffff777fffffffffffffff777ffffffffffffffff777fffffffffffffff777fffff777777fff777fffffffffffff777ffffffffffffffffffffffffffffffffffffffff
            ffffffffffff7777777777fffffff777fffffffffffffff777ffffffffffffffff777fffffffffffffff777ffffff77777fff777fffffffffffff777ffffffffffffffffffffffffffffffffffffffff
            ffffffffffff777777777ffffffff777fffffffffffffff777ffffffffffffffff777fffffffffffffff777ffffff77777fff777fffffffffffff777ffffffffffffffffffffffffffffffffffffffff
            ffffffffffff7777777ffffffffff7777777777777fffff777ffffffffffffffff7777777777777fffff777fffffff7777fff77777777777fffff777ffffffffffffffffffffffffffffffffffffffff
            ffffffffffff77777ffffffffffff7777777777777fffff777ffffffffffffffff7777777777777fffff777fffffff7777fff77777777777fffff777777777777fffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffff7777777777777fffff777fffffffffffffffff777777777777fffff777ffffffff777fff77777777777fffff777777777777fffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777fffff777777777777fffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffff7777777777ffffffff77777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffff7777777777fffffff777777777777fffff7777777777777fffff777777777ff77777777fffffffffff777777777777fff777ffffff777fff777777777fffffffffffffffffffffffffff
            ffffffffffff7777777777fffffff7777777777777ffff7777777777777fffff777777777ff77777777fffffffffff777777777777fff777ffffff777fff777777777fffffffffffffffffffffffffff
            ffffffffffff777ffffffffffffff777fffffff777ffff7777777777777ffff77777777777777777777fffffffffff777777777777fff777ffffff777fff777777777fffffffffffffffffffffffffff
            ffffffffffff777ffffffffffffff777fffffff777ffff777fffffff777ffff777fffff77777ffff777fffffffffffffff777ffffffff777ffffff777fff777fffffffffffffffffffffffffffffffff
            ffffffffffff777ffffffffffffff777fffffff777ffff777fffffff777ffff777fffff77777ffff777fffffffffffffff777ffffffff777ffffff777fff777fffffffffffffffffffffffffffffffff
            ffffffffffff777ffffffffffffff777fffffff777ffff777fffffff777ffff777fffff777ffffff777fffffffffffffff777ffffffff777ffffff777fff777fffffffffffffffffffffffffffffffff
            ffffffffffff777ffffffffffffff777fffffff777ffff777fffffff777ffff777fffff777ffffff777fffffffffffffff777ffffffff777ffffff777fff777fffffffffffffffffffffffffffffffff
            ffffffffffff7777777777fffffff777fffffff777ffff777fffffff777ffff777fffff777ffffff777fffffffffffffff777ffffffff777ffffff777fff777fffffffffffffffffffffffffffffffff
            ffffffffffff7777777777fffffff7777777777777ffff777fffffff777ffff777fffff777ffffff777fffffffffffffff777ffffffff777ffffff777fff777fffffffffffffffffffffffffffffffff
            ffffffffffff7777777777fffffff7777777777777ffff777fffffff777ffff777fffff777ffffff777fffffffffffffff777ffffffff777777777777fff777777777fffffffffffffffffffffffffff
            ffffffffffff777ffffffffffffff777777777777fffff777fffffff777ffff777fffff777ffffff777fffffffffffffff777ffffffff777777777777fff777777777fffffffffffffffffffffffffff
            ffffffffffff777ffffffffffffff777777fffffffffff777fffffff777ffff777fffff777ffffff777fffffffffffffff777ffffffff777777777777fff777777777fffffffffffffffffffffffffff
            ffffffffffff777ffffffffffffff7777777ffffffffff777fffffff777ffff777fffff777ffffff777fffffffffffffff777ffffffff777ffffff777fff777fffffffffffffffffffffffffffffffff
            ffffffffffff777ffffffffffffff777777777ffffffff777fffffff777ffff777fffff777ffffff777fffffffffffffff777ffffffff777ffffff777fff777fffffffffffffffffffffffffffffffff
            ffffffffffff777ffffffffffffff777f777777fffffff777fffffff777ffff777ffffffffffffff777fffffffffffffff777ffffffff777ffffff777fff777fffffffffffffffffffffffffffffffff
            ffffffffffff777ffffffffffffff777ff777777ffffff777fffffff777ffff777ffffffffffffff777fffffffffffffff7777fffffff777ffffff777fff777fffffffffffffffffffffffffffffffff
            ffffffffffff777ffffffffffffff777ffff77777fffff7777777777777ffff777ffffffffffffff777fffffffffffffff7777fffffff777fffff7777fff777777777fffffffffffffffffffffffffff
            ffffffffffff777ffffffffffffff777fffff7777fffff7777777777777ffff777ffffffffffffff777ffffffffffffffff777fffffff777fffff7777fff777777777fffffffffffffffffffffffffff
            fffffffffffffffffffffffffffff777ffffff777fffff7777777777777ffff777ffffffffffffff777ffffffffffffffffffffffffff777fffff777ffff777777777fffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff77777fffffffffffff777777777777fffff77777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff7777777fffffffffff777777777777fffff77777777777777ffffff7777777777777fffff777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff777777777ffffffff7777777777777fffff77777777777777fffff77777777777777ffff7777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff7777777777fffffff777fffffff777fffffffffff77777777fffff777777777777777fff7777777777777fff777fffffffffff77777777777ffffffffffffffffffffffffffffffffffff
            fffffffffff777ff7777777fffff777fffffff777fffffffffffffff7777fffff777fffffffff777fff777ff77777777fff777fffffffffff77777777777ffffffffffffffffffffffffffffffffffff
            fffffffffff777ffff777777ffff777fffffff777ffffffffffffff77777fffff777fffffffff777fff777fffffff777fff777fffffffffff77777777777ffffffffffffffffffffffffffffffffffff
            fffffffffff777fffff77777ffff777fffffff777ffffffffffffff7777ffffff777fffffffff777fff777fffffff777fff777fffffffffff777ffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff777fffffff777ffff777fffffff777fffffffffffff7777fffffff777fffffffff777fff777fffffff777fff777fffffffffff777ffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff777fffffff777ffff777fffffff777fffffffffffff7777fffffff777fffffffff777fff777fffffff777fff777fffffffffff7777fffffffffffffffffffffffffffffffffffffffffff
            fffffffffff777fffffff777ffff777fffffff777ffffffffffff7777ffffffff777fffffffff777fff777fffffff777fff777fffffffffff7777fffffffffffffffffffffffffffffffffffffffffff
            fffffffffff777fffffff777ffff7777777777777ffffffffffff7777ffffffff777777777777777fff777fffffff777fff777ffffffffffff777fffffffffffffffffffffffffffffffffffffffffff
            fffffffffff777fffffff777ffff7777777777777fffffffffff7777fffffffff777777777777777fff777fffffff777fff777ffffffffffff7777ffffffffffffffffffffffffffffffffffffffffff
            fffffffffff777fffffff777ffff7777777777777ffffffffff77777fffffffff777777777777777fff777fffffff777fff777ffffffffffff777777ffffffffffffffffffffffffffffffffffffffff
            fffffffffff777fffffff777ffff777fffffff777ffffffffff7777ffffffffff777fffffffffffffff777fffffff777fff777fffffffffffff77777777fffffffffffffffffffffffffffffffffffff
            fffffffffff777fffffff777ffff777fffffff777fffffffff7777fffffffffff777fffffffffffffff777fffffff777fff777fffffffffffff777777777ffffffffffffffffffffffffffffffffffff
            fffffffffff777fffffff777ffff777fffffff777fffffffff7777fffffffffff777fffffffffffffff777fffffff777fff777ffffffffffffffff777777ffffffffffffffffffffffffffffffffffff
            fffffffffff777fffffff777ffff777fffffff777ffffffff7777ffffffffffff777fffffffffffffff777fffffff777fff777fffffffffffffffffff777ffffffffffffffffffffffffffffffffffff
            fffffffffff777fffffff777ffff777fffffff777ffffffff7777ffffffffffff777fffffffffffffff777fffffff777fff777fffffffffffffffffff777ffffffffffffffffffffffffffffffffffff
            fffffffffff777ffffff7777ffff777fffffff777fffffff7777fffffffffffff777fffffffffffffff777fffffff777fff777fffffffffffffffffff777ffffffffffffffffffffffffffffffffffff
            fffffffffff777ffff777777ffff777fffffff777ffffff77777fffffffffffff777fffffffffffffff777fffffff777fff777fffffffffffffffffff777ffffffffffffffffffffffffffffffffffff
            fffffffffff777fff7777777ffff777fffffff777ffffff7777ff77777777ffff777fffffffffffffff777fffffff777fff777fffffffffffffffffff777ffffffffffffffffffffffffffffffffffff
            fffffffffff777f7777777ffffff777fffffff777fffff777777777777777ffff777fffffffffffffff7777777777777fff77777777777fffffffffff777ffffffffffffffffffffffffffffffffffff
            fffffffffff777777777ffffffff777fffffff777fffff777777777777777ffff777fffffffffffffff7777777777777fff77777777777ffff7777777777ffffffffffffffffffffffffffffffffffff
            fffffffffff77777777fffffffff777fffffff777fffff777777777ffffffffff777fffffffffffffff7777777777777fff77777777777ffff7777777777ffffffffffffffffffffffffffffffffffff
            fffffffffff777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffff777777777fffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        Play = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Button)
        Help = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Button2)
        Cursor = sprites.create(img`
            . . . . . . . 6 . . . . . . . . 
            . . . . 6 6 6 6 6 6 6 . . . . . 
            . . . 6 . . . 6 . . . 6 . . . . 
            . . 6 . . . . 6 . . . . 6 . . . 
            . 6 . . . 6 6 6 6 6 . . . 6 . . 
            . 6 . . 6 . . 6 . . 6 . . 6 . . 
            . 6 . . 6 . . 6 . . 6 . . 6 . . 
            6 6 6 6 6 6 6 2 6 6 6 6 6 6 6 . 
            . 6 . . 6 . . 6 . . 6 . . 6 . . 
            . 6 . . 6 . . 6 . . 6 . . 6 . . 
            . 6 . . . 6 6 6 6 6 . . . 6 . . 
            . . 6 . . . . 6 . . . . 6 . . . 
            . . . 6 . . . 6 . . . 6 . . . . 
            . . . . 6 6 6 6 6 6 6 . . . . . 
            . . . . . . . 6 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        controller.moveSprite(Cursor)
        Cursor.setStayInScreen(true)
        animation.runImageAnimation(
        Play,
        [img`
            777777777777777777777777
            788887777778888887888877
            787877888887788888877787
            777888888888888888888787
            778888888888888888888877
            778888888888888888888887
            778888888888888888888887
            778888888888888888888887
            778888888888888888888887
            787888888888888888888887
            788888888888888888888877
            777888888888888888888877
            778888888888888888888887
            788878888877788877777777
            777777877788788888888887
            777777777777777777777777
            `,img`
            777777777777777777777777
            788887777778888887888877
            787877888887788888877787
            777888888888888888888787
            778822228288822228282877
            778828828288828828282887
            778828828288828828282887
            778822228288822228282887
            778828888288828828222887
            787828888288828828882887
            788828888288828828882877
            777828888222828828222877
            778888888888888888888887
            788878888877788877777777
            777777877788788888888887
            777777777777777777777777
            `],
        500,
        true
        )
        animation.runImageAnimation(
        Help,
        [img`
            777777777777777777777777
            788887777778888887888877
            787877888887788888877787
            777888888888888888888787
            778888888888888888888877
            778888888888888888888887
            778888888888888888888887
            778888888888888888888887
            778888888888888888888887
            787888888888888888888887
            788888888888888888888877
            777888888888888888888877
            778888888888888888888887
            788878888877788877777777
            777777877788788888888887
            777777777777777777777777
            `,img`
            777777777777777777777777
            788887777778888887888877
            787877888887788888877787
            777888888888888888888787
            778828828222828882222877
            778828828288828882882887
            778828828288828882882887
            778828828222828882882887
            778822228288828882222887
            787828828288828882888887
            788828828288828882888877
            777828828222822282888877
            778888888888888888888887
            788878888877788877777777
            777777877788788888888887
            777777777777777777777777
            `],
        500,
        true
        )
        Play.setPosition(12, 110)
        Help.setPosition(139, 110)
    }
    if (Level == 1) {
        Cursor.destroy()
        Help.destroy()
        Play.destroy()
        game.setDialogTextColor(7)
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 7 . . . . . . 
            . . . . . . . . . 7 7 . . . . . 
            . . . . . . . . . 7 7 7 . . . . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
            . . . . . . . . . 7 7 7 . . . . 
            . . . . . . . . . 7 7 . . . . . 
            . . . . . . . . . 7 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        game.setDialogFrame(img`
            7777777777777777777777777
            7888878877777888788778887
            7878877778788888777787877
            7788888888888888888888877
            7788888888888888888888887
            7788888888888888888888887
            7888888888888888888888887
            7888888888888888888888887
            7788888888888888888888877
            7788888888888888888888877
            7788888888888888888888877
            7778888888888888888888887
            7878888888888888888888877
            7878888888888888888888777
            7878888888888888888888887
            7878888888888888888888877
            7878888888888888888888877
            7788888888888888888888877
            7788888888888888888888877
            7788888888888888888888887
            7888888888888888888888877
            7888888888888888888888777
            7778887788888888888888887
            7887788887877887778888787
            7777777777777777777777777
            `)
        game.showLongText("Welcome to Defence from the Dazpols A/Spacebar/Q to shoot WASD/Arrow Keys/Left Joystick to move. Blast through waves of enemies and reach your highscore! ", DialogLayout.Full)
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffff
            fffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffff555fffffffffff
            fffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffff555fffffffffff
            ffffffffffffff555ffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffff555ffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffff555ffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffff
            fffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff555ffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff555ffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff555ffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff555ffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff555ffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffff555fffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffff555ffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffff555fffffffffffffffffffffffff555fffffffffffffffffffff
            ffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffff555fffffffffffffffffffffffff555fffffffffffffffffffff
            ffffffffffffffffffffffffff555ffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffff555ffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            2222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            2222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            2222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            2222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            22222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222fffff222fffffffffffffffffffffffffffffffffffffffffff
            2222222222222222222222222222222222222222222222222222222222222fffff222ffffffffff222222ffffffffffffffff22222222fffff222fffffffffffffffffffffffffffffffffffffffffff
            2222222222222222222222222222222222222222222222222222222222222fffff2222222222222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffff
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            `)
        george = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . 8 . . . 5 5 5 5 . . . . . . 
            . . 8 8 . . 5 5 5 5 5 . . . . . 
            . . 8 8 2 2 2 2 2 2 2 a a . . . 
            . . 8 8 2 2 2 f f f 2 a a a . . 
            . . 8 8 2 2 2 2 2 2 2 a a . . . 
            . . 8 8 . . 5 5 5 5 5 . . . . . 
            . . 8 . . . 5 5 5 5 . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        george.setFlag(SpriteFlag.StayInScreen, true)
        controller.moveSprite(george, 125, 125)
        info.setLife(3)
        if (info.life() >= 5) {
            info.changeLifeBy(-1)
        }
        ALIEN_INVASION__COMPLETE = statusbars.create(30, 3, StatusBarKind.Wave)
        ALIEN_INVASION__COMPLETE.setColor(7, 8, 2)
        ALIEN_INVASION__COMPLETE.positionDirection(CollisionDirection.Top)
        ALIEN_INVASION__COMPLETE.setLabel("Wave % ")
        ALIEN_INVASION__COMPLETE.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    }
    if (Level == 2) {
        scene.setBackgroundImage(img`
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            `)
        scene.setBackgroundColor(8)
        Play.setPosition(119, 66)
        Help.destroy()
        Text = sprites.create(img`
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            `, SpriteKind.Thing)
        Text2 = sprites.create(img`
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            `, SpriteKind.Thing)
        easteregg = sprites.create(img`
            fffffffffffffffffffffffff
            f333f333f333ff33ff33fffff
            f3f3f3f3f3fff3fff3fffffff
            f333f333f333f33ff33ffffff
            f3fff33ff3fffff3fff3fffff
            f3fff3f3f333f333f333fffff
            fffffffffffffffffffffffff
            fffffffffffffffffffffffff
            f333f3fff3fff333f333f3fff
            f3f3f3fff3fff3f3f3f3f3fff
            f3f3f333f333f3f3f333f333f
            f333f3f3f3f3f333f3f3f3f3f
            f3f3f333f333f3f3f3f3f333f
            fffffffffffffffffffffffff
            fffffffffffffffffffffffff
            fffffffffffffffffffffffff
            fff3fffffffffffffffffffff
            fff3fffffffffffffffffffff
            fff3fffffffffffffffffffff
            fff3fffffffffffffffffffff
            fff3fffffffffffffffffffff
            fff3fffffffffffffffffffff
            fffffffffffffffffffffffff
            fff3fffffffffffffffffffff
            fffffffffffffffffffffffff
            `, SpriteKind.Thing)
        animation.runImageAnimation(
        Text,
        [img`
            77777777777777777777777777777777777
            78888888888888888888888888888888887
            78777877787778778877787778777888887
            78788878787888787887888788788888887
            78788877787778787887888788877888887
            78788877887888787887888788887888887
            78777878787778778877788788777888887
            78888888888888888888888888888888887
            7ffffffffffffffffffffffffffff888887
            7888888888888888888888888888ffff8f7
            7888888888888888888888888888888fff7
            78888888888888888888888888888888887
            78888888888888888888888888888888887
            78888888888888888888888888888888887
            78888888888888888888888888888888887
            78888888888888888888888888888888887
            78888888888888888888888888888888887
            78888888888888888888888888888888887
            78888888888888888888888888888888887
            78888888888888888888888888888888887
            78888888888888888888888888888888887
            78888888888888888888888888888888887
            78888888888888888888888888888888887
            78888888888888888888888888888888887
            78888888888888888888888888888888887
            78888888888888888888888888888888887
            78888888888888888888888888888888887
            78888888888888888888888888888888887
            78888888888888888888888888888888887
            78888888888888888888888888888888887
            77777777777777777777777777777777777
            `,img`
            77777777777777777777777777777777777
            78888888888888888888888888888888887
            78777877787778778877787778777888887
            78788878787888787887888788788888887
            78788877787778787887888788877888887
            78788877887888787887888788887888887
            78777878787778778877788788777888887
            78888888888888888888888888888888887
            7ffffffffffffffffffffffffffff888887
            7888888888888888888888888888ffff8f7
            7888888888888888888888888888888fff7
            78877777877777888777777888888888887
            78878888788887888788888888888888887
            78878888788887888788888888888888887
            78878888788887888788888888888888887
            78878888788887888788888888888888887
            78878888788887888788888888888888887
            78878888788887888788888888888888887
            78878888788887888788888888888888887
            78878888788887888777777888888888887
            78878888788887888788888888888888887
            78878888788887888788888888888888887
            78878888788887888788888888888888887
            78878888788887888788888888888888887
            78878888788887888788888888888888887
            78878888788887888788888888888888887
            78878888788887888788888888888888887
            78878888788887888788888888888888887
            78878888788887888777777888888888887
            78888888888888888888888888888888887
            77777777777777777777777777777777777
            `],
        500,
        true
        )
        animation.runImageAnimation(
        Text2,
        [img`
            88888888888888888888888888888888888
            88777887778788878887778788878888888
            88788887878788878887878788878888888
            88777887878788878887878787878888888
            88788887878788878887878787878888888
            88788887778777877787778777778888888
            88888888888888888888888888888888888
            fffffffffffffffffffffffffffff888888
            8888888888888888888888888888ffff8ff
            8888888888888888888888888888888ffff
            88777778777778777878878887877788888
            88887888887888788878878888878788888
            88887888887888788877778887878788888
            88887888887888788878878887878788888
            88777778887888777878878787877788888
            88888888888888888888888888888888888
            88888888888888888888888888888888888
            88778878777787777787777877778777888
            88777878788787878787887878878788888
            88787878788787878787887878878788888
            88787878788787878787887877778777877
            88787778788787888787887877888788888
            88788778788787888787887878788788888
            88788778777787888787777878878777888
            88888888888888888888888888888888888
            88777878878788788878787878787878787
            88788878878778788878787878787878787
            88777878878787788878787878787878787
            88788878878788788888888888888888888
            88788877778788788878787878787878787
            `,img`
            88888888888888888888888888888888888
            88777887778788878887778788878888888
            88788887878788878887878788878888888
            88777887878788878887878787878888888
            88788887878788878887878787878888888
            88788887778777877787778777778888888
            88888888888888888888888888888888888
            fffffffffffffffffffffffffffff888888
            8888888888888888888888888888ffff8ff
            8888888888888888888888888888888ffff
            88777778777778777878878887877788888
            88887888887888788878878888878788888
            88887888887888788877778887878788888
            88887888887888788878878887878788888
            88777778887888777878878787877788888
            88888888888888888888888888888888888
            88888888888888888888888888888888888
            88778878777787777787777877778777888
            88777878788787878787887878878788888
            88787878788787878787887878878788888
            88787878788787878787887877778777877
            88787778788787888787887877888788888
            88788778788787888787887878788788888
            88788778777787888787777878878777888
            88888888888888888888888888888888888
            88777878878788788888888888888888888
            88788878878778788888888888888888888
            88777878878787788888888888888888888
            88788878878788788888888888888888888
            88788877778788788888888888888888888
            `],
        500,
        true
        )
        Text.setPosition(24, 23)
        Text2.setPosition(62, 15)
        easteregg.setPosition(121, 39)
    }
}
controller.combos.attachCombo("A-B-A", function () {
    Achievements.resetAllAchievements()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
})
statusbars.onZero(StatusBarKind.Wave, function (status) {
    if (Achievements.checkForAchievement("Its Not Over Yet...", true)) {
        Achievements.showAchievement(
        "Its Not Over Yet...",
        "Defeat The First Wave of Enemies",
        2
        )
    }
    game.showLongText("Well done soldier you have claimed Mars! Now you must face the aliens above earth and protect your people!", DialogLayout.Full)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111fffffffffffffffffffffffffff
        fffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111ffffffffffffffffffffffffff
        fffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111fffffffffffffffffffffffff
        fffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111ffffffffffffffffffffffff
        fffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111fffffffffffffffffffffff
        fffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111ffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffff111111111fffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffff111111111fffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffff111111111fffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffff111111111fffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffff1111111111fffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111fffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111fffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111fffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111fffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffff
        fffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffff55555fffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffff55555fffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffff55555fffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffff55555fffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffff55555fffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffff55555fffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        7777fffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        7777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        7777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        777777777777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        777777777777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        7777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        77777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777fffff777fffffffffffffffffffffffffffffffffffffffffff
        7777777777777777777777777777777777777777777777777777777777777fffff777ffffffffff777777ffffffffffffffff77777777fffff777fffffffffffffffffffffffffffffffffffffffffff
        7777777777777777777777777777777777777777777777777777777777777fffff7777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffff
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    ALIEN_INVASION__COMPLETE.destroy()
    wave_2 = statusbars.create(55, 3, StatusBarKind.Wave2)
    wave_2.setColor(7, 8, 2)
    wave_2.positionDirection(CollisionDirection.Top)
    wave_2.setLabel("Wave % ")
    wave_2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Superenemy, function (sprite, otherSprite) {
    statusbar.value += -15
})
controller.combos.attachCombo("A-B-B-A-A-B", function () {
    game.setDialogTextColor(2)
    game.setDialogFrame(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
    game.showLongText("Well Done! You Succesfully Completed The Secret Easter Egg. Developed By G.O...............I hope you Enjoyed my Game and Thank you For Playing...", DialogLayout.Full)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Level == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . 7 7 7 7 7 7 . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, george, 200, 0)
        music.pewPew.play()
    }
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    statusbar.spriteAttachedTo().destroy()
    ALIEN_INVASION__COMPLETE.value += -1
    if (Achievements.checkForAchievement("Defeat The Beast ", true)) {
        Achievements.showAchievement(
        "Defeat The Beast ",
        "You Killed a Super Enemy ",
        2
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Superenemy, function (sprite, otherSprite) {
    ALIEN_INVASION__COMPLETE.value += -1
    otherSprite.destroy()
    info.changeLifeBy(-2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Button2, function (sprite, otherSprite) {
    if (otherSprite == Help && controller.A.isPressed()) {
        Level = 2
        LevelControl()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.magicWand.play()
    otherSprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Button, function (sprite, otherSprite) {
    if (Level == 0) {
        if (otherSprite == Play && controller.A.isPressed()) {
            Level = 1
            LevelControl()
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.baDing.play()
    ALIEN_INVASION__COMPLETE.value += -1
    otherSprite.destroy(effects.disintegrate, 500)
    sprite.destroy()
    info.changeScoreBy(1)
    if (Achievements.checkForAchievement("First Blood", true)) {
        Achievements.showAchievement(
        "First Blood",
        "You Killed Your First Basic Enemy",
        2
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    ALIEN_INVASION__COMPLETE.value += -1
    info.changeLifeBy(-1)
    music.powerDown.play()
})
let Alien_Warship: Sprite = null
let Super_warship: Sprite = null
let Medical_Pac: Sprite = null
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let wave_2: StatusBarSprite = null
let easteregg: Sprite = null
let Text2: Sprite = null
let Text: Sprite = null
let ALIEN_INVASION__COMPLETE: StatusBarSprite = null
let george: Sprite = null
let Cursor: Sprite = null
let Help: Sprite = null
let Play: Sprite = null
let Level = 0
Level = 0
LevelControl()
game.onUpdateInterval(50000, function () {
    if (Level == 1) {
        Medical_Pac = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            .....111111111......
            .....1.......1......
            .....1.......1......
            ...2121111111212....
            ...2121112111212....
            ...2121112111212....
            ...2121222221212....
            ...2121112111212....
            ...2121112111212....
            ...2121111111212....
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            `, SpriteKind.Food)
        Medical_Pac.setPosition(randint(10, 150), randint(10, 100))
    }
})
game.onUpdateInterval(7500, function () {
    if (Level == 1) {
        Super_warship = sprites.create(img`
            . . . . . . . . . . . . . . . 
            . . . . . 1 1 1 1 . . . . . . 
            . . . . 1 5 1 1 5 1 . . . . . 
            . . . . 1 2 5 5 2 1 . . . . . 
            . . 1 1 1 7 7 7 7 1 1 1 . . . 
            . . 1 1 7 7 f f 7 7 1 1 . . . 
            . 1 1 1 7 7 f f 7 7 1 1 1 . . 
            . 1 1 1 7 7 7 7 7 7 1 1 1 . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `, SpriteKind.Superenemy)
        Super_warship.setVelocity(-40, 0)
        Super_warship.setPosition(160, randint(10, 100))
        statusbar = statusbars.create(20, 3, StatusBarKind.EnemyHealth)
        statusbar.attachToSprite(Super_warship)
    }
})
game.onUpdateInterval(1000, function () {
    if (Level == 1) {
        Alien_Warship = sprites.create(img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . 1 1 1 1 1 1 1 1 . . . . . 
            . . 1 1 7 7 7 1 1 1 . . . . . 
            . . 1 1 7 f 7 1 1 1 . . . . . 
            . . 1 1 7 7 7 1 1 1 . . . . . 
            . 6 6 6 6 6 6 6 6 6 6 . . . . 
            . 6 6 6 6 6 6 6 6 6 6 . . . . 
            . . 6 6 6 6 6 6 6 6 . . . . . 
            . . . 6 6 6 6 6 6 . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        Alien_Warship.setVelocity(-50, 0)
        Alien_Warship.setPosition(160, randint(10, 100))
    }
})
