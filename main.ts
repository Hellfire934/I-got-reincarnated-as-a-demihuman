namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const npc1 = SpriteKind.create()
    export const NPC2 = SpriteKind.create()
    export const NPC3 = SpriteKind.create()
    export const NPC4 = SpriteKind.create()
    export const NPC5 = SpriteKind.create()
    export const NPC6 = SpriteKind.create()
    export const NPC7 = SpriteKind.create()
    export const Npc8 = SpriteKind.create()
    export const npc9 = SpriteKind.create()
    export const monster1 = SpriteKind.create()
    export const monster2 = SpriteKind.create()
    export const monster3 = SpriteKind.create()
    export const monster4 = SpriteKind.create()
    export const monster5 = SpriteKind.create()
    export const monster6 = SpriteKind.create()
    export const monster7 = SpriteKind.create()
    export const monster8 = SpriteKind.create()
    export const monster10 = SpriteKind.create()
    export const monster9 = SpriteKind.create()
    export const monster11 = SpriteKind.create()
    export const monster12 = SpriteKind.create()
    export const Boss1 = SpriteKind.create()
    export const Boss2 = SpriteKind.create()
    export const monster18 = SpriteKind.create()
    export const monster17 = SpriteKind.create()
    export const monster16 = SpriteKind.create()
    export const monster15 = SpriteKind.create()
    export const monster14 = SpriteKind.create()
    export const monster13 = SpriteKind.create()
    export const Boss3 = SpriteKind.create()
}
namespace StatusBarKind {
    export const EXP = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.monster2, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -0.25
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Npc8, function (sprite, otherSprite) {
    if (otherSprite == npc9) {
        timer.throttle("action", 5000, function () {
            npc9.sayText("how is your day dranios", 5000, true)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (level == 10) {
        tiles.setCurrentTilemap(maps[7])
        tiles.placeOnTile(mySprite, tiles.getTileLocation(64, 36))
        // Used to move character before updating level location due to overlapping warp positions on map 7 and map 10.
        timer.after(250, function () {
            level = 7
        })
    }
})
sprites.onOverlap(SpriteKind.monster12, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -0.25
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster14, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    stausbar3.value += 3
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walk up`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    if (otherSprite == NPC1) {
        timer.throttle("action", 500, function () {
            NPC1.sayText("Meow (I am Litten.)", 2000, true)
        })
    }
})
statusbars.onStatusReached(StatusBarKind.Energy, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 0, function (status) {
    game.setGameOverMessage(false, "MP is also life total")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster8, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    stausbar3.value += 1.5
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house A dragonia teleport`, function (sprite, location) {
    if (level == 7) {
        tiles.setCurrentTilemap(maps[11])
        mySprite.setPosition(40, 100)
        level = 11
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house Angelica teleport`, function (sprite, location) {
    if (level == 5) {
        tiles.setCurrentTilemap(maps[16])
        mySprite.setPosition(175, 150)
        level = 16
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`final boss teleport0`, function (sprite, location) {
    if (level == 9) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(1775, 825)
        level = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`mage tower0`, function (sprite, location) {
    if (level == 14) {
        tiles.setCurrentTilemap(maps[7])
        mySprite.setPosition(575, 275)
        level = 7
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`perch teleport`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[6])
        mySprite.setPosition(100, 30)
        level = 6
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC7, function (sprite, otherSprite) {
    if (otherSprite == npc8) {
        timer.throttle("action", 5000, function () {
            npc8.sayText("This had been Great after the war that helped all of us even if the demon lord was alive I would think he was not the one in char... how are you young boy", 5000, true)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`mage tower`, function (sprite, location) {
    if (level == 7) {
        tiles.setCurrentTilemap(maps[14])
        mySprite.setPosition(80, 125)
        level = 14
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Angelica guild church teleport0`, function (sprite, location) {
    if (level == 15) {
        tiles.setCurrentTilemap(maps[5])
        mySprite.setPosition(425, 500)
        level = 5
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC5, function (sprite, otherSprite) {
    if (otherSprite == NPC6) {
        timer.throttle("action", 1000, function () {
            NPC6.sayText("What are you looking at", 2000, true)
        })
    }
})
statusbars.onStatusReached(StatusBarKind.Magic, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 0, function (status) {
    animation.stopAnimation(animation.AnimationTypes.ImageAnimation, mySprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.after(500, function () {
        animation.runImageAnimation(
        mySprite,
        assets.animation`dark magic attack`,
        100,
        false
        )
        timer.after(600, function () {
            animation.runImageAnimation(
            mySprite,
            assets.animation`netral animation`,
            200,
            false
            )
        })
    })
    timer.after(550, function () {
        projectile = sprites.createProjectileFromSprite(assets.image`projectial`, mySprite, 0, -50)
        pause(100)
        timer.after(500, function () {
            projectile = sprites.createProjectileFromSprite(assets.image`projectial0`, mySprite, -150, 0)
            pause(100)
            timer.after(500, function () {
                projectile = sprites.createProjectileFromSprite(assets.image`projectial1`, mySprite, 150, 0)
                pause(100)
                timer.after(500, function () {
                    projectile = sprites.createProjectileFromSprite(assets.image`projectial2`, mySprite, 0, 50)
                    pause(100)
                })
            })
        })
    })
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    stausbar3.value += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spider cavern teleport`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[1])
        mySprite.setPosition(300, 625)
        level = 1
        monster_7 = sprites.create(assets.image`Spider enime`, SpriteKind.monster7)
        tiles.placeOnRandomTile(monster_7, assets.tile`floor for the spooders`)
        Monster8 = sprites.create(assets.image`Spider enime`, SpriteKind.monster8)
        tiles.placeOnRandomTile(Monster8, assets.tile`floor for the spooders`)
        monster9 = sprites.create(assets.image`Spider enime`, SpriteKind.monster9)
        tiles.placeOnRandomTile(monster9, assets.tile`floor for the spooders0`)
        monster10 = sprites.create(assets.image`Spider enime`, SpriteKind.monster10)
        tiles.placeOnRandomTile(monster10, assets.tile`floor for the spooders0`)
        monster11 = sprites.create(assets.image`Spider enime`, SpriteKind.monster11)
        tiles.placeOnRandomTile(monster11, assets.tile`floor for the spooders1`)
        monster12 = sprites.create(assets.image`Spider enime`, SpriteKind.monster12)
        tiles.placeOnRandomTile(monster12, assets.tile`floor for the spooders1`)
        Boss1 = sprites.create(assets.image`Spiderqueen`, SpriteKind.Boss1)
        tiles.placeOnRandomTile(Boss1, assets.tile`floor for the goblins1`)
        timer.after(500, function () {
            // remamber to change velocity on all
            monster_7.setVelocity(randint(-25, 25), randint(-30, 30))
            Monster8.setVelocity(randint(-25, 25), randint(-30, 30))
            monster9.setVelocity(randint(-25, 25), randint(-30, 30))
            monster10.setVelocity(randint(-25, 25), randint(-30, 30))
            monster11.setVelocity(randint(-25, 25), randint(-30, 30))
            monster12.setVelocity(randint(-25, 25), randint(-30, 30))
        })
    }
})
sprites.onOverlap(SpriteKind.monster17, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -0.25
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`goblin cavern teleport`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[4])
        mySprite.setPosition(205, 530)
        level = 4
        monster1 = sprites.create(assets.image`goblin`, SpriteKind.monster1)
        tiles.placeOnRandomTile(monster1, assets.tile`floor for the goblins2`)
        monster_2 = sprites.create(assets.image`goblin`, SpriteKind.monster2)
        tiles.placeOnRandomTile(monster_2, assets.tile`floor for the goblins3`)
        monster3 = sprites.create(assets.image`goblin`, SpriteKind.monster3)
        tiles.placeOnRandomTile(monster3, assets.tile`floor for the goblins0`)
        monster_4 = sprites.create(assets.image`goblin archer`, SpriteKind.monster4)
        tiles.placeOnRandomTile(monster_4, assets.tile`floor for the goblins2`)
        monster5 = sprites.create(assets.image`goblin archer`, SpriteKind.monster5)
        tiles.placeOnRandomTile(monster5, assets.tile`floor for the goblins3`)
        monster6 = sprites.create(assets.image`goblin archer`, SpriteKind.monster6)
        tiles.placeOnRandomTile(monster6, assets.tile`floor for the goblins0`)
        boss2 = sprites.create(assets.image`myImage`, SpriteKind.Boss2)
        tiles.placeOnRandomTile(boss2, assets.tile`floor for the goblins1`)
        timer.after(100, function () {
            if (spriteutils.distanceBetween(mySprite, monster1) < 1000) {
                monster1.follow(mySprite, 50)
            } else {
                monster1.follow(null)
            }
        })
        timer.after(100, function () {
            if (spriteutils.distanceBetween(mySprite, monster_2) < 1000) {
                monster_2.follow(mySprite, 55)
            } else {
                monster_2.follow(null)
            }
        })
        timer.after(100, function () {
            if (spriteutils.distanceBetween(mySprite, monster3) < 1000) {
                monster3.follow(mySprite, 60)
            } else {
                monster3.follow(null)
            }
        })
        timer.after(100, function () {
            if (spriteutils.distanceBetween(mySprite, monster_4) < 1000) {
                monster_4.follow(mySprite, 35)
            } else {
                monster_4.follow(null)
            }
        })
        timer.after(100, function () {
            if (spriteutils.distanceBetween(mySprite, monster5) < 1000) {
                monster5.follow(mySprite, 40)
            } else {
                monster5.follow(null)
            }
        })
        timer.after(100, function () {
            if (spriteutils.distanceBetween(mySprite, monster6) < 1000) {
                monster6.follow(mySprite, 45)
            } else {
                monster6.follow(null)
            }
        })
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walk right`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC2, function (sprite, otherSprite) {
    if (otherSprite == NPC3) {
        timer.throttle("action", 500, function () {
            NPC3.sayText("hello did you know that the demonic was its own town at one point in time", 5000, true)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`orger teleport`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[8])
        mySprite.setPosition(245, 510)
        level = 8
        monster13 = sprites.create(assets.image`oger with a sword and amor`, SpriteKind.monster13)
        tiles.placeOnRandomTile(monster13, assets.tile`ork floor2`)
        scaling.scaleToPercent(monster13, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        monster14 = sprites.create(assets.image`oger with a sword and amor`, SpriteKind.monster14)
        tiles.placeOnRandomTile(monster14, assets.tile`ork floor0`)
        scaling.scaleToPercent(monster14, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        monster15 = sprites.create(assets.image`oger with a sword and amor`, SpriteKind.monster15)
        tiles.placeOnRandomTile(monster15, assets.tile`ork floor2`)
        scaling.scaleToPercent(monster15, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        monster16 = sprites.create(assets.image`mage type orger`, SpriteKind.monster16)
        tiles.placeOnRandomTile(monster16, assets.tile`ork floor1`)
        scaling.scaleToPercent(monster16, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        monster17 = sprites.create(assets.image`mage type orger`, SpriteKind.monster17)
        tiles.placeOnRandomTile(monster17, assets.tile`ork floor0`)
        scaling.scaleToPercent(monster17, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        monster18 = sprites.create(assets.image`mage type orger`, SpriteKind.monster18)
        tiles.placeOnRandomTile(monster18, assets.tile`ork floor1`)
        scaling.scaleToPercent(monster18, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        timer.after(100, function () {
            if (spriteutils.distanceBetween(mySprite, monster13) < 1000) {
                monster13.follow(mySprite, 50)
            } else {
                monster13.follow(null)
            }
        })
        timer.after(100, function () {
            if (spriteutils.distanceBetween(mySprite, monster14) < 1000) {
                monster14.follow(mySprite, 55)
            } else {
                monster14.follow(null)
            }
        })
        timer.after(100, function () {
            if (spriteutils.distanceBetween(mySprite, monster15) < 1000) {
                monster15.follow(mySprite, 60)
            } else {
                monster15.follow(null)
            }
        })
        timer.after(100, function () {
            if (spriteutils.distanceBetween(mySprite, monster16) < 1000) {
                monster16.follow(mySprite, 35)
            } else {
                monster16.follow(null)
            }
        })
        timer.after(100, function () {
            if (spriteutils.distanceBetween(mySprite, monster17) < 1000) {
                monster17.follow(mySprite, 40)
            } else {
                monster17.follow(null)
            }
        })
        timer.after(100, function () {
            if (spriteutils.distanceBetween(mySprite, monster18) < 1000) {
                monster18.follow(mySprite, 45)
            } else {
                monster18.follow(null)
            }
        })
    }
})
sprites.onOverlap(SpriteKind.monster7, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -0.25
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house A dragonia teleport0`, function (sprite, location) {
    if (level == 11) {
        tiles.setCurrentTilemap(maps[7])
        mySprite.setPosition(925, 275)
        level = 7
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC3, function (sprite, otherSprite) {
    if (otherSprite == NPC$) {
        timer.throttle("action", 500, function () {
            NPC$.sayText("Welcome to Dragonia", 5000, true)
        })
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster9, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    stausbar3.value += 1.5
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`teleport to anglica`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[5])
        mySprite.setPosition(950, 175)
        level = 5
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`floor 2 orger tellyport0`, function (sprite, location) {
    if (level == 17) {
        tiles.setCurrentTilemap(maps[8])
        mySprite.setPosition(400, 20)
        level = 8
        monster13 = sprites.create(assets.image`oger with a sword and amor`, SpriteKind.monster13)
        tiles.placeOnRandomTile(monster13, assets.tile`ork floor2`)
        scaling.scaleToPercent(monster13, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        monster14 = sprites.create(assets.image`oger with a sword and amor`, SpriteKind.monster14)
        tiles.placeOnRandomTile(monster14, assets.tile`ork floor0`)
        scaling.scaleToPercent(monster14, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        monster15 = sprites.create(assets.image`oger with a sword and amor`, SpriteKind.monster15)
        tiles.placeOnRandomTile(monster15, assets.tile`ork floor2`)
        scaling.scaleToPercent(monster15, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        monster16 = sprites.create(assets.image`mage type orger`, SpriteKind.monster16)
        tiles.placeOnRandomTile(monster16, assets.tile`ork floor1`)
        scaling.scaleToPercent(monster16, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        monster17 = sprites.create(assets.image`mage type orger`, SpriteKind.monster17)
        tiles.placeOnRandomTile(monster17, assets.tile`ork floor0`)
        scaling.scaleToPercent(monster17, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        monster18 = sprites.create(assets.image`mage type orger`, SpriteKind.monster18)
        tiles.placeOnRandomTile(monster18, assets.tile`ork floor1`)
        scaling.scaleToPercent(monster18, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        timer.after(100, function () {
            if (spriteutils.distanceBetween(mySprite, monster13) < 1000) {
                monster13.follow(mySprite, 50)
            } else {
                monster13.follow(null)
            }
        })
        timer.after(100, function () {
            if (spriteutils.distanceBetween(mySprite, monster14) < 1000) {
                monster14.follow(mySprite, 55)
            } else {
                monster14.follow(null)
            }
        })
        timer.after(100, function () {
            if (spriteutils.distanceBetween(mySprite, monster15) < 1000) {
                monster15.follow(mySprite, 60)
            } else {
                monster15.follow(null)
            }
        })
        timer.after(100, function () {
            if (spriteutils.distanceBetween(mySprite, monster16) < 1000) {
                monster16.follow(mySprite, 35)
            } else {
                monster16.follow(null)
            }
        })
        timer.after(100, function () {
            if (spriteutils.distanceBetween(mySprite, monster17) < 1000) {
                monster17.follow(mySprite, 40)
            } else {
                monster17.follow(null)
            }
        })
        timer.after(100, function () {
            if (spriteutils.distanceBetween(mySprite, monster18) < 1000) {
                monster18.follow(mySprite, 45)
            } else {
                monster18.follow(null)
            }
        })
    }
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 0, function (status) {
    game.gameOver(false)
    game.setGameOverMessage(false, "GAME OVER!")
})
sprites.onOverlap(SpriteKind.monster8, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -0.25
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC4, function (sprite, otherSprite) {
    if (otherSprite == NPC5) {
        timer.throttle("action", 500, function () {
            NPC5.sayText("ITS WIZARD TIME ", 500, false)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`dragonia guild teleport`, function (sprite, location) {
    if (level == 7) {
        tiles.setCurrentTilemap(maps[10])
        mySprite.setPosition(240, 40)
        level = 10
        npc8 = sprites.create(assets.image`ramble npc`, SpriteKind.NPC7)
        tiles.placeOnRandomTile(npc8, assets.tile`stool3`)
        npc9 = sprites.create(assets.image`kind npc`, SpriteKind.Npc8)
        tiles.placeOnRandomTile(npc9, assets.tile`stool2`)
        npc10 = sprites.create(assets.image`guild npc`, SpriteKind.npc9)
        tiles.placeOnRandomTile(npc10, assets.tile`stool0`)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster17, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    stausbar3.value += 3
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`final boss teleport`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[9])
        mySprite.setPosition(240, 510)
        level = 9
        NPC2 = sprites.create(assets.image`sung  g woo`, SpriteKind.npc1)
        tiles.placeOnRandomTile(NPC2, assets.tile`NPC spot`)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster4, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    stausbar3.value += 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster1, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    stausbar3.value += 1
})
sprites.onOverlap(SpriteKind.monster16, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -0.25
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spider cavern teleport0`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(1050, 875)
        level = 0
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walk left`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.monster5, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -0.25
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster6, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    stausbar3.value += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc1, function (sprite, otherSprite) {
    if (otherSprite == NPC2) {
        timer.throttle("action", 500, function () {
            NPC2.sayText("Good luck Dranios", 2000, true)
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC6, function (sprite, otherSprite) {
    if (otherSprite == NPC7) {
        timer.throttle("action", 200, function () {
            animation.runImageAnimation(
            NPC7,
            assets.animation`ducky`,
            200,
            true
            )
        })
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster7, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    stausbar3.value += 1.5
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster13, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    stausbar3.value += 3
})
sprites.onOverlap(SpriteKind.Boss2, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -0.25
})
sprites.onOverlap(SpriteKind.monster9, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -0.25
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house B drgonia teleport`, function (sprite, location) {
    if (level == 7) {
        tiles.setCurrentTilemap(maps[12])
        mySprite.setPosition(35, 40)
        level = 12
        NPC3 = sprites.create(assets.image`NPC human`, SpriteKind.NPC2)
        tiles.placeOnRandomTile(NPC3, assets.tile`myTile9`)
    }
})
sprites.onOverlap(SpriteKind.monster15, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -0.25
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`perch teleport0`, function (sprite, location) {
    if (level == 6) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(840, 400)
        level = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`goblin cavern teleport0`, function (sprite, location) {
    if (level == 4) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(1960, 155)
        level = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`dragonian teleport`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[7])
        mySprite.setPosition(225, 50)
        level = 7
        NPC$ = sprites.create(assets.image`Dragonia welcome npc`, SpriteKind.NPC3)
        tiles.placeOnRandomTile(NPC$, assets.tile`myTile16`)
        NPC5 = sprites.create(assets.image`wizard NPC`, SpriteKind.NPC4)
        tiles.placeOnRandomTile(NPC5, assets.tile`npc5`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`floor 2 orger tellyport`, function (sprite, location) {
    if (level == 8) {
        tiles.setCurrentTilemap(maps[17])
        mySprite.setPosition(400, 20)
        level = 17
        Boss3 = sprites.create(assets.image`dumb orger boss`, SpriteKind.Boss3)
        tiles.placeOnRandomTile(Boss3, assets.tile`ork floor`)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Walk down`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.monster13, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -0.25
})
sprites.onOverlap(SpriteKind.monster6, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -0.25
})
sprites.onOverlap(SpriteKind.monster10, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -0.25
})
sprites.onOverlap(SpriteKind.monster4, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -0.25
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster5, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    stausbar3.value += 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster10, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    stausbar3.value += 1.5
})
statusbars.onStatusReached(StatusBarKind.EXP, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 100, function (status) {
    game.gameOver(true)
    game.setGameOverMessage(true, "You Win")
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster18, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    stausbar3.value += 3
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`your home teleport0`, function (sprite, location) {
    if (level == 3) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(1550, 225)
        level = 0
    }
})
sprites.onOverlap(SpriteKind.monster14, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -0.25
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`teleport to anglica0`, function (sprite, location) {
    if (level == 5) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(1500, 400)
        level = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house C dragoina Teleport0`, function (sprite, location) {
    if (level == 13) {
        tiles.setCurrentTilemap(maps[7])
        mySprite.setPosition(350, 600)
        level = 7
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house C dragoina Teleport`, function (sprite, location) {
    if (level == 7) {
        tiles.setCurrentTilemap(maps[13])
        mySprite.setPosition(35, 110)
        level = 13
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house Angelica teleport0`, function (sprite, location) {
    if (level == 16) {
        tiles.setCurrentTilemap(maps[5])
        mySprite.setPosition(425, 620)
        level = 5
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster12, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    stausbar3.value += 1.5
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`barn teleport0`, function (sprite, location) {
    if (level == 2) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(1350, 225)
        level = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`barn teleport`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[2])
        mySprite.setPosition(160, 215)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house B drgonia teleport0`, function (sprite, location) {
    if (level == 12) {
        tiles.setCurrentTilemap(maps[7])
        mySprite.setPosition(220, 500)
        level = 7
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster15, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    stausbar3.value += 3
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc9, function (sprite, otherSprite) {
    if (otherSprite == npc10) {
        timer.throttle("action", 5000, function () {
            npc10.sayText("did you know that the caves can give you more damage for each boss you murder", 5000, true)
        })
    }
})
sprites.onOverlap(SpriteKind.monster11, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -0.25
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster3, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    stausbar3.value += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`dragonian teleport0`, function (sprite, location) {
    if (level == 7) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(275, 145)
        level = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Angelica guild church teleport`, function (sprite, location) {
    if (level == 5) {
        tiles.setCurrentTilemap(maps[15])
        mySprite.setPosition(225, 540)
        level = 15
        NPC6 = sprites.create(assets.image`angle NPC`, SpriteKind.NPC5)
        tiles.placeOnRandomTile(NPC6, assets.tile`new NPC spot`)
    }
})
sprites.onOverlap(SpriteKind.monster1, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -0.25
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster11, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    stausbar3.value += 1.5
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster16, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    stausbar3.value += 3
})
sprites.onOverlap(SpriteKind.monster3, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -0.25
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`orger teleport0`, function (sprite, location) {
    if (level == 8) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(840, 160)
        level = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`your home teleport`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[3])
        mySprite.setPosition(60, 180)
        level = 3
        NPC1 = sprites.create(assets.image`litten`, SpriteKind.NPC)
        tiles.placeOnRandomTile(NPC1, assets.tile`myTile0`)
        NPC7 = sprites.create(assets.image`duckerten`, SpriteKind.NPC6)
        tiles.placeOnRandomTile(NPC7, assets.tile`water tile0`)
    }
})
let Boss3: Sprite = null
let NPC7: Sprite = null
let NPC2: Sprite = null
let npc10: Sprite = null
let NPC5: Sprite = null
let NPC$: Sprite = null
let monster18: Sprite = null
let monster17: Sprite = null
let monster16: Sprite = null
let monster15: Sprite = null
let monster14: Sprite = null
let monster13: Sprite = null
let NPC3: Sprite = null
let boss2: Sprite = null
let monster6: Sprite = null
let monster5: Sprite = null
let monster_4: Sprite = null
let monster3: Sprite = null
let monster_2: Sprite = null
let monster1: Sprite = null
let Boss1: Sprite = null
let monster12: Sprite = null
let monster11: Sprite = null
let monster10: Sprite = null
let monster9: Sprite = null
let Monster8: Sprite = null
let monster_7: Sprite = null
let projectile: Sprite = null
let NPC6: Sprite = null
let npc8: Sprite = null
let NPC1: Sprite = null
let npc9: Sprite = null
let stausbar3: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let level = 0
let mySprite: Sprite = null
let maps: tiles.TileMapData[] = []
maps = [
tilemap`over world`,
tilemap`spider cavern`,
tilemap`barn`,
tilemap`Dranios home`,
tilemap`goblin cavern`,
tilemap`anglica`,
tilemap`perch`,
tilemap`draconia`,
tilemap`oger cavern`,
tilemap`Kargalgan final boss`,
tilemap`dragonia guild`,
tilemap`house a dragonia`,
tilemap`house B dragonia`,
tilemap`dragoina c house`,
tilemap`wisered tower`,
tilemap`Angelica guild church`,
tilemap`Angelica a house`,
tilemap`oger cavern floor 2`
]
mySprite = sprites.create(assets.image`dranios`, SpriteKind.Player)
mySprite.setPosition(655, 875)
controller.moveSprite(mySprite, 150, 150)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`over world`)
level = 0
statusbar = statusbars.create(40, 5, StatusBarKind.Health)
statusbar.setOffsetPadding(50, 2)
statusbar.setColor(7, 2, 5)
statusbar.setBarBorder(1, 15)
statusbar.max = 100
statusbar.setLabel("HP", 15)
statusbar.positionDirection(CollisionDirection.Left)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
let statusbar2 = statusbars.create(40, 5, StatusBarKind.Energy)
statusbar2.setOffsetPadding(50, 20)
statusbar2.setColor(8, 6, 9)
statusbar2.setBarBorder(1, 15)
statusbar2.positionDirection(CollisionDirection.Right)
statusbar2.setLabel("MP", 15)
statusbar2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar2.max = 100
stausbar3 = statusbars.create(100, 5, StatusBarKind.EXP)
stausbar3.setOffsetPadding(-10, 5)
stausbar3.setColor(10, 11, 11)
stausbar3.setBarBorder(1, 15)
stausbar3.positionDirection(CollisionDirection.Top)
stausbar3.setLabel("EXP", 15)
stausbar3.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
stausbar3.value = 0
game.onUpdate(function () {
    if (level == 7) {
        sprites.destroy(NPC3)
    }
})
game.onUpdate(function () {
    if (level == 0) {
        sprites.destroy(NPC2)
    }
})
game.onUpdate(function () {
    if (level == 0) {
        sprites.destroy(NPC1)
    }
})
game.onUpdate(function () {
    if (level == 0) {
        sprites.destroy(NPC$)
    }
    if (level == 10) {
        sprites.destroy(NPC$)
    }
    if (level == 11) {
        sprites.destroy(NPC$)
    }
    if (level == 12) {
        sprites.destroy(NPC$)
    }
    if (level == 13) {
        sprites.destroy(NPC$)
    }
    if (level == 14) {
        sprites.destroy(NPC$)
    }
})
game.onUpdate(function () {
    if (level == 0) {
        sprites.destroy(NPC5)
    }
    if (level == 10) {
        sprites.destroy(NPC5)
    }
    if (level == 11) {
        sprites.destroy(NPC5)
    }
    if (level == 12) {
        sprites.destroy(NPC5)
    }
    if (level == 13) {
        sprites.destroy(NPC5)
    }
    if (level == 14) {
        sprites.destroy(NPC5)
    }
})
game.onUpdate(function () {
    if (level == 6) {
        sprites.destroy(NPC6)
    }
})
game.onUpdate(function () {
    if (level == 0) {
        sprites.destroy(NPC7)
    }
})
game.onUpdate(function () {
    if (level == 7) {
        sprites.destroy(npc8)
    }
})
game.onUpdate(function () {
    if (level == 7) {
        sprites.destroy(npc9)
    }
})
game.onUpdate(function () {
    if (level == 17) {
        sprites.destroy(monster13)
        sprites.destroy(monster14)
        sprites.destroy(monster15)
        sprites.destroy(monster16)
        sprites.destroy(monster17)
        sprites.destroy(monster18)
    }
    if (level == 0) {
        sprites.destroy(monster13)
        sprites.destroy(monster14)
        sprites.destroy(monster15)
        sprites.destroy(monster16)
        sprites.destroy(monster17)
        sprites.destroy(monster18)
    }
    if (level == 1) {
        sprites.destroy(monster13)
        sprites.destroy(monster14)
        sprites.destroy(monster15)
        sprites.destroy(monster16)
        sprites.destroy(monster17)
        sprites.destroy(monster18)
    }
    if (level == 2) {
        sprites.destroy(monster13)
        sprites.destroy(monster14)
        sprites.destroy(monster15)
        sprites.destroy(monster16)
        sprites.destroy(monster17)
        sprites.destroy(monster18)
    }
    if (level == 3) {
        sprites.destroy(monster13)
        sprites.destroy(monster14)
        sprites.destroy(monster15)
        sprites.destroy(monster16)
        sprites.destroy(monster17)
        sprites.destroy(monster18)
    }
    if (level == 4) {
        sprites.destroy(monster13)
        sprites.destroy(monster14)
        sprites.destroy(monster15)
        sprites.destroy(monster16)
        sprites.destroy(monster17)
        sprites.destroy(monster18)
    }
    if (level == 5) {
        sprites.destroy(monster13)
        sprites.destroy(monster14)
        sprites.destroy(monster15)
        sprites.destroy(monster16)
        sprites.destroy(monster17)
        sprites.destroy(monster18)
    }
    if (level == 6) {
        sprites.destroy(monster13)
        sprites.destroy(monster14)
        sprites.destroy(monster15)
        sprites.destroy(monster16)
        sprites.destroy(monster17)
        sprites.destroy(monster18)
    }
})
game.onUpdate(function () {
    if (level == 7) {
        sprites.destroy(npc10)
    }
})
game.onUpdate(function () {
    if (level == 0) {
        sprites.destroy(monster1)
        sprites.destroy(monster_2)
        sprites.destroy(monster3)
        sprites.destroy(monster_4)
        sprites.destroy(monster5)
        sprites.destroy(monster6)
        sprites.destroy(monster_7)
        sprites.destroy(Monster8)
        sprites.destroy(monster9)
        sprites.destroy(monster10)
        sprites.destroy(monster11)
        sprites.destroy(monster12)
    }
})
game.onUpdate(function () {
    if (level == 0) {
        sprites.destroy(Boss1)
        sprites.destroy(boss2)
    }
})
game.onUpdate(function () {
    if (level == 0) {
        sprites.destroy(monster13)
        sprites.destroy(monster14)
        sprites.destroy(monster15)
        sprites.destroy(monster16)
        sprites.destroy(monster17)
        sprites.destroy(monster18)
    }
})
game.onUpdate(function () {
    if (level == 8) {
        sprites.destroy(Boss3)
    }
})
game.onUpdate(function () {
    if (level == 8) {
        sprites.destroy(Boss3)
    }
})
game.onUpdate(function () {
    if (level == 17) {
        sprites.destroy(monster13)
        sprites.destroy(monster14)
        sprites.destroy(monster15)
        sprites.destroy(monster16)
        sprites.destroy(monster17)
        sprites.destroy(monster18)
    }
})
forever(function () {
    if (controller.A.isPressed()) {
        timer.after(500, function () {
            statusbar2.value += -1
        })
    }
})
forever(function () {
    if (controller.B.isPressed()) {
        timer.after(5000, function () {
            statusbar2.value += 1
        })
    }
})
forever(function () {
    if (controller.B.isPressed()) {
        timer.after(5000, function () {
            statusbar.value += 1
        })
    }
})
