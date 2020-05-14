/* eslint-disable no-unused-expressions */
import Bowman from '../classes/Bowman';
import Swordsman from '../classes/Swordsman';
import Magician from '../classes/Magician';
import Undead from '../classes/Undead';
import Zombie from '../classes/Zombie';
import Daemon from '../classes/Daemon';

test('create Daemon', () => {
  const daemon = new Daemon();
  expect(daemon).toEqual({ attack: 40, defence: 10 });
});

test('create Zombie', () => {
  const zombie = new Zombie();
  expect(zombie).toEqual({ attack: 40, defence: 10 });
});

test('create Undead', () => {
  const undead = new Undead();
  expect(undead).toEqual({ attack: 25, defence: 25 });
});

test('create Magician', () => {
  const magician = new Magician();
  expect(magician).toEqual({ attack: 10, defence: 40 });
});

test('create Swordsman', () => {
  const swordsman = new Swordsman();
  expect(swordsman).toEqual({ attack: 40, defence: 10 });
});

test('create Bowman', () => {
  const bowman = new Bowman();
  expect(bowman).toEqual({
    attack: 25, defence: 25, health: 10, level: 1,
  });
});

test('Bowman get powerMode', () => {
  const bowman = new Bowman();
  bowman.powerMode = 'on';
  expect(bowman.powerMode).toBe(3);
  expect(bowman.characteristics).toEqual({ attack: 50, defence: 50, health: 20 });
  expect(bowman.powerMode).toBe(2);
});

test('power mode уже включен', () => {
  const bowman = new Bowman();
  bowman.powerMode = 'on';
  expect(() => {
    bowman.powerMode = 'on';
  }).toThrowError();
});

test('powerMode закончился', () => {
  const bowman = new Bowman();
  bowman.powerMode = 'on';
  bowman.characteristics;
  bowman.characteristics;
  bowman.characteristics;
  expect(bowman.characteristics).toEqual('Power Mode уже израсходован или не включен');
});
