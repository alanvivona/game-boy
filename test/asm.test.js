const Assembler = require('../asm')

const testCases = [
    // LD instruction reg to reg
      { "input": "LD B,B", "hex": "40" },
      { "input": "LD B,C", "hex": "41" },
      { "input": "LD B,D", "hex": "42" },
      { "input": "LD B,E", "hex": "43" },
      { "input": "LD B,H", "hex": "44" },
      { "input": "LD B,L", "hex": "45" },
      { "input": "LD C,B", "hex": "48" },
      { "input": "LD C,C", "hex": "49" },
      { "input": "LD C,D", "hex": "4a" },
      { "input": "LD C,E", "hex": "4b" },
      { "input": "LD C,H", "hex": "4c" },
      { "input": "LD C,L", "hex": "4d" },
      { "input": "LD B,A", "hex": "47" },
      { "input": "LD C,A", "hex": "4f" },
      { "input": "LD D,B", "hex": "50" },
      { "input": "LD D,C", "hex": "51" },
      { "input": "LD D,D", "hex": "52" },
      { "input": "LD D,E", "hex": "53" },
      { "input": "LD D,H", "hex": "54" },
      { "input": "LD D,L", "hex": "55" },
      { "input": "LD D,A", "hex": "57" },
      { "input": "LD E,B", "hex": "58" },
      { "input": "LD E,C", "hex": "59" },
      { "input": "LD E,D", "hex": "5a" },
      { "input": "LD E,E", "hex": "5b" },
      { "input": "LD E,H", "hex": "5c" },
      { "input": "LD E,L", "hex": "5d" },
      { "input": "LD E,A", "hex": "5f" },
      { "input": "LD H,B", "hex": "60" },
      { "input": "LD H,C", "hex": "61" },
      { "input": "LD H,D", "hex": "62" },
      { "input": "LD H,E", "hex": "63" },
      { "input": "LD H,H", "hex": "64" },
      { "input": "LD H,L", "hex": "65" },
      { "input": "LD H,A", "hex": "67" },
      { "input": "LD L,B", "hex": "68" },
      { "input": "LD L,C", "hex": "69" },
      { "input": "LD L,D", "hex": "6a" },
      { "input": "LD L,E", "hex": "6b" },
      { "input": "LD L,H", "hex": "6c" },
      { "input": "LD L,L", "hex": "6d" },
      { "input": "LD L,A", "hex": "6f" },
      { "input": "LD A,B", "hex": "78" },
      { "input": "LD A,B", "hex": "78" },
      { "input": "LD A,C", "hex": "79" },
      { "input": "LD A,C", "hex": "79" },
      { "input": "LD A,D", "hex": "7a" },
      { "input": "LD A,D", "hex": "7a" },
      { "input": "LD A,E", "hex": "7b" },
      { "input": "LD A,E", "hex": "7b" },
      { "input": "LD A,H", "hex": "7c" },
      { "input": "LD A,H", "hex": "7c" },
      { "input": "LD A,L", "hex": "7d" },
      { "input": "LD A,L", "hex": "7d" },
      { "input": "LD A,A", "hex": "7f" },
      { "input": "LD A,A", "hex": "7f" },
      { "input": "LD A,A", "hex": "7f" },
     
     // LD with 1byte immediate value in hex
     { "input": "LD B,0x55", "hex": "0655" },
     { "input": "LD C,0x55", "hex": "0e55" },
     { "input": "LD D,0x55", "hex": "1655" },
     { "input": "LD E,0x55", "hex": "1e55" },
     { "input": "LD H,0x55", "hex": "2655" },
     { "input": "LD L,0x55", "hex": "2e55" },
 
     // LD with 1byte immediate value in binary
     { "input": "LD B,0b111", "hex": "0607" },
     { "input": "LD C,0b111", "hex": "0e07" },
     { "input": "LD D,0b111", "hex": "1607" },
     { "input": "LD E,0b111", "hex": "1e07" },
     { "input": "LD H,0b111", "hex": "2607" },
     { "input": "LD L,0b111", "hex": "2e07" },
 
     // LD with 1byte immediate value in decimal
     { "input": "LD B,11", "hex": "060B" },
     { "input": "LD C,11", "hex": "0e0B" },
     { "input": "LD D,11", "hex": "160B" },
     { "input": "LD E,11", "hex": "1e0B" },
     { "input": "LD H,11", "hex": "260B" },
     { "input": "LD L,11", "hex": "2e0B" },
     // LD double registers to register
     { "input": "LD B,(HL)", "hex": "46" },
     { "input": "LD A,(BC)", "hex": "0a" },
     { "input": "LD A,(DE)", "hex": "1a" },
     { "input": "LD C,(HL)", "hex": "4e" },
     { "input": "LD D,(HL)", "hex": "56" },
     { "input": "LD E,(HL)", "hex": "5e" },
     { "input": "LD H,(HL)", "hex": "66" },
     { "input": "LD L,(HL)", "hex": "6e" },
     { "input": "LD A,(HL)", "hex": "7e" },
     { "input": "LD (HL),B", "hex": "70" },
     { "input": "LD (HL),C", "hex": "71" },
     { "input": "LD (HL),D", "hex": "72" },
     { "input": "LD (HL),E", "hex": "73" },
     { "input": "LD (HL),H", "hex": "74" },
     { "input": "LD (HL),L", "hex": "75" },
     { "input": "LD (HL),A", "hex": "77" },
     { "input": "LD (BC),A", "hex": "02" },
     { "input": "LD (DE),A", "hex": "12" },
  
     // LD double registers to register
     { "input": "LD B,(HL)", "hex": "46" },
     { "input": "LD A,(BC)", "hex": "0a" },
     { "input": "LD A,(DE)", "hex": "1a" },
     { "input": "LD C,(HL)", "hex": "4e" },
     { "input": "LD D,(HL)", "hex": "56" },
     { "input": "LD E,(HL)", "hex": "5e" },
     { "input": "LD H,(HL)", "hex": "66" },
     { "input": "LD L,(HL)", "hex": "6e" },
     { "input": "LD A,(HL)", "hex": "7e" },
     { "input": "LD (HL),B", "hex": "70" },
     { "input": "LD (HL),C", "hex": "71" },
     { "input": "LD (HL),D", "hex": "72" },
     { "input": "LD (HL),E", "hex": "73" },
     { "input": "LD (HL),H", "hex": "74" },
     { "input": "LD (HL),L", "hex": "75" },
     { "input": "LD (HL),A", "hex": "77" },
     { "input": "LD (BC),A", "hex": "02" },
     { "input": "LD (DE),A", "hex": "12" },
    
    // TODO: THESE DON'T WORK
    // LD immediate values
    {"input": "LD A,0b111", "hex": "3e07" },
    {"input": "LD (0xAA55),A", "hex": "ea55aa" },
    {"input": "LD A,(0xaa55)", "hex": "fa55aa" },
    // THESE DON'T WORK

    // Put value at address $FF00 + register C into A and vice-versa
     { "input": "LD A,(C)", "hex": "f2" },
     { "input": "LD (C),A", "hex": "e2" },
   
     // Put value at address HL into A. Decrement HL. It has 3 variants
    { "input": "LDD A,(HL)", "hex": "3a" },
    { "input": "LD A,(HLD)", "hex": "3a" },
    { "input": "LD A,(HL-)", "hex": "3a" },

    // Put A into memory address HL. Decrement HL. Has 3 variants
    { "input": "LD (HLD),A", "hex": "32" },
    { "input": "LD (HL-),A", "hex": "32" },
    { "input": "LDD (HL),A", "hex": "32" },

    // Put value at address HL into A. Increment HL. 3 variants
    { "input": "LD A,(HL+)", "hex": "2a" },
    { "input": "LD A,(HLI)", "hex": "2a" },
    { "input": "LDI A,(HL)", "hex": "2a" },

    // Put A into memory address HL. Increment HL. 3 variants
    { "input": "LD (HLI),A", "hex": "22" },
    { "input": "LD (HL+),A", "hex": "22" },
    { "input": "LDI (HL),A", "hex": "22" },

    // LDH : Put A into memory address $FF00+n and viceversa
    { "input": "LDH (0xff),A", "hex": "e0ff" },
    { "input": "LDH A,(0xff)", "hex": "f0ff" },

    // LD 16bit
    { "input": "LD BC,0x55aa", "hex": "0155aa" },
    { "input": "LD DE,0x55aa", "hex": "1155aa" },
    { "input": "LD HL,0x55aa", "hex": "2155aa" },
    { "input": "LD SP,0x55aa", "hex": "3155aa" },
    { "input": "LD SP,HL", "hex": "f9" },

    // LDHL with two variants
    { "input": "LDHL SP,0x55", "hex": "f855" },
    // TODO: This variant is not supported yet!!
    // { "input": "LD HL,SP+0x55", "hex": "f855" },

    { "input": "LD (0x55aa),SP", "hex": "0855aa" },

    // 16BIT PUSH
    { "input": "PUSH BC", "hex": "c5" },
    { "input": "PUSH DE", "hex": "d5" },
    { "input": "PUSH HL", "hex": "e5" },
    { "input": "PUSH AF", "hex": "f5" },

    // 16BIT POP
    { "input": "POP BC", "hex": "c1" },
    { "input": "POP DE", "hex": "d1" },
    { "input": "POP HL", "hex": "e1" },
    { "input": "POP AF", "hex": "f1" },

    // ALU : ADD A
    { "input": "ADD A,A", "hex": "87" },
    { "input": "ADD A,B", "hex": "80" },
    { "input": "ADD A,C", "hex": "81" },
    { "input": "ADD A,D", "hex": "82" },
    { "input": "ADD A,E", "hex": "83" },
    { "input": "ADD A,H", "hex": "84" },
    { "input": "ADD A,L", "hex": "85" },
    { "input": "ADD A,(HL)", "hex": "86" },
    { "input": "ADD A,0x55", "hex": "c655" },

    // ALU : ADC A
    { "input": "ADC A,B", "hex": "88" },
    { "input": "ADC A,C", "hex": "89" },
    { "input": "ADC A,D", "hex": "8a" },
    { "input": "ADC A,E", "hex": "8b" },
    { "input": "ADC A,H", "hex": "8c" },
    { "input": "ADC A,L", "hex": "8d" },
    { "input": "ADC A,(HL)", "hex": "8e" },
    { "input": "ADC A,A", "hex": "8f" },
    { "input": "ADC A,0x55", "hex": "ce55" },

    // ALU : SUB from A
    { "input": "SUB B", "hex": "90" },
    { "input": "SUB C", "hex": "91" },
    { "input": "SUB D", "hex": "92" },
    { "input": "SUB E", "hex": "93" },
    { "input": "SUB H", "hex": "94" },
    { "input": "SUB L", "hex": "95" },
    { "input": "SUB (HL)", "hex": "96" },
    { "input": "SUB A", "hex": "97" },
    { "input": "SUB 0x55", "hex": "d655" },

    // ALU : SBC from A
    { "input": "SBC A,B", "hex": "98" },
    { "input": "SBC A,C", "hex": "99" },
    { "input": "SBC A,D", "hex": "9a" },
    { "input": "SBC A,E", "hex": "9b" },
    { "input": "SBC A,H", "hex": "9c" },
    { "input": "SBC A,L", "hex": "9d" },
    { "input": "SBC A,(HL)", "hex": "9e" },
    { "input": "SBC A,A", "hex": "9f" },
    // [WARNING!] The manual does not have an opcode for this instruction!!!
    // THIS WILL FAIL      
    // { "input": "SBC A,#", "hex": "????" },

    // ALU : AND A
    { "input": "AND B", "hex": "a0" },
    { "input": "AND C", "hex": "a1" },
    { "input": "AND D", "hex": "a2" },
    { "input": "AND E", "hex": "a3" },
    { "input": "AND H", "hex": "a4" },
    { "input": "AND L", "hex": "a5" },
    { "input": "AND (HL)", "hex": "a6" },
    { "input": "AND A", "hex": "a7" },
    { "input": "AND 0x55", "hex": "e655" },

    // ALU : OR A
    { "input": "OR B", "hex": "b0" },
    { "input": "OR C", "hex": "b1" },
    { "input": "OR D", "hex": "b2" },
    { "input": "OR E", "hex": "b3" },
    { "input": "OR H", "hex": "b4" },
    { "input": "OR L", "hex": "b5" },
    { "input": "OR (HL)", "hex": "b6" },
    { "input": "OR A", "hex": "b7" },
    { "input": "OR 0x55", "hex": "f655" },

    // ALU : XOR with A
    { "input": "XOR B", "hex": "a8" },
    { "input": "XOR C", "hex": "a9" },
    { "input": "XOR D", "hex": "aa" },
    { "input": "XOR E", "hex": "ab" },
    { "input": "XOR H", "hex": "ac" },
    { "input": "XOR L", "hex": "ad" },
    { "input": "XOR (HL)", "hex": "ae" },
    { "input": "XOR A", "hex": "af" },
    { "input": "XOR 0x55", "hex": "ee55" },
    
    // ALU : CP with A
    { "input": "CP A", "hex": "bf" }, 
    { "input": "CP B", "hex": "b8" },
    { "input": "CP C", "hex": "b9" },
    { "input": "CP D", "hex": "ba" },
    { "input": "CP E", "hex": "bb" },
    { "input": "CP H", "hex": "bc" },
    { "input": "CP L", "hex": "bd" },
    { "input": "CP (HL)", "hex": "be" },
    { "input": "CP 0x55", "hex": "fe55" },

    // ALU : INC 8bit
    { "input": "INC A", "hex": "3c" },
    { "input": "INC B", "hex": "04" },
    { "input": "INC C", "hex": "0c" },
    { "input": "INC D", "hex": "14" },
    { "input": "INC E", "hex": "1c" },
    { "input": "INC H", "hex": "24" },
    { "input": "INC L", "hex": "2c" },
    { "input": "INC (HL)", "hex": "34" },

    // ALU : INC 8bit
    { "input": "DEC A", "hex": "3d" },
    { "input": "DEC B", "hex": "05" },
    { "input": "DEC C", "hex": "0d" },
    { "input": "DEC D", "hex": "15" },
    { "input": "DEC E", "hex": "1d" },
    { "input": "DEC H", "hex": "25" },
    { "input": "DEC L", "hex": "2d" },
    { "input": "DEC (HL)", "hex": "35" },

    // ALU 16bit add to HL
    { "input": "ADD HL,BC", "hex": "09" },
    { "input": "ADD HL,DE", "hex": "19" },
    { "input": "ADD HL,HL", "hex": "29" },
    { "input": "ADD HL,SP", "hex": "39" },

    { "input": "ADD SP,0x55", "hex": "e855" },

    { "input": "INC BC", "hex": "03" },
    { "input": "INC DE", "hex": "13" },
    { "input": "INC HL", "hex": "23" },
    { "input": "INC SP", "hex": "33" },

    { "input": "DEC BC", "hex": "0b" },
    { "input": "DEC DE", "hex": "1b" },
    { "input": "DEC HL", "hex": "2b" },
    { "input": "DEC SP", "hex": "3b" },

    { "input": "SWAP (HL)", "hex": "cb" },
    { "input": "SWAP H", "hex": "cb" },
    { "input": "SWAP B", "hex": "cb" },
    { "input": "SWAP D", "hex": "cb" },
    { "input": "SWAP C", "hex": "cb" },
    { "input": "SWAP E", "hex": "cb" },
    { "input": "SWAP A", "hex": "cb" },
    { "input": "SWAP L", "hex": "cb" },

    { "input": "DAA", "hex": "27" },

    { "input": "CPL", "hex": "2f" },

    { "input": "CCF", "hex": "3f" },

    { "input": "SCF", "hex": "37" },

    { "input": "NOP", "hex": "00" },

    { "input": "HALT", "hex": "76" },

    { "input": "STOP", "hex": "1000" },

    // Interrupts
    { "input": "DI", "hex": "f3" },
    { "input": "EI", "hex": "fb" },

    // Rotates
    { "input": "RLCA", "hex": "07" },
    { "input": "RLA", "hex": "17" },
    { "input": "RRCA", "hex": "0f" },
    { "input": "RRA", "hex": "1f" },
    { "input": "RLC A", "hex": "cb" },
    { "input": "RLC B", "hex": "cb00" },
    { "input": "RLC C", "hex": "cb01" },
    { "input": "RLC D", "hex": "cb02" },
    { "input": "RLC E", "hex": "cb03" },
    { "input": "RLC H", "hex": "cb04" },
    { "input": "RLC L", "hex": "cb05" },
    { "input": "RLC (HL)", "hex": "cb06" },
    { "input": "RL B", "hex": "cb10" },
    { "input": "RL C", "hex": "cb11" },
    { "input": "RL D", "hex": "cb12" },
    { "input": "RL E", "hex": "cb13" },
    { "input": "RL H", "hex": "cb14" },
    { "input": "RL L", "hex": "cb15" },
    { "input": "RL (HL)", "hex": "cb16" },
    { "input": "RL A", "hex": "cb17" },   
    { "input": "RRC B", "hex": "cb08" },
    { "input": "RRC C", "hex": "cb09" },
    { "input": "RRC D", "hex": "cb0a" },
    { "input": "RRC E", "hex": "cb0b" },
    { "input": "RRC H", "hex": "cb0c" },
    { "input": "RRC L", "hex": "cb0d" },
    { "input": "RRC (HL)", "hex": "cb0e" },
    { "input": "RRC A", "hex": "cb0f" },
    { "input": "RR B", "hex": "cb18" },
    { "input": "RR C", "hex": "cb19" },
    { "input": "RR D", "hex": "cb1a" },
    { "input": "RR E", "hex": "cb1b" },
    { "input": "RR H", "hex": "cb1c" },
    { "input": "RR L", "hex": "cb1d" },
    { "input": "RR (HL)", "hex": "cb1e" },
    { "input": "RR A", "hex": "cb1f" },

    // Shifts
    { "input": "SLA B", "hex": "cb20" },
    { "input": "SLA C", "hex": "cb21" },
    { "input": "SLA D", "hex": "cb22" },
    { "input": "SLA E", "hex": "cb23" },
    { "input": "SLA H", "hex": "cb24" },
    { "input": "SLA L", "hex": "cb25" },
    { "input": "SLA (HL)", "hex": "cb26" },
    { "input": "SLA A", "hex": "cb27" },
    { "input": "SRA B", "hex": "cb28" },
    { "input": "SRA C", "hex": "cb29" },
    { "input": "SRA D", "hex": "cb2a" },
    { "input": "SRA E", "hex": "cb2b" },
    { "input": "SRA H", "hex": "cb2c" },
    { "input": "SRA L", "hex": "cb2d" },
    { "input": "SRA (HL)", "hex": "cb2e" },
    { "input": "SRA A", "hex": "cb2f" },
    { "input": "SRL B", "hex": "cb38" },
    { "input": "SRL C", "hex": "cb39" },
    { "input": "SRL D", "hex": "cb3a" },
    { "input": "SRL E", "hex": "cb3b" },
    { "input": "SRL H", "hex": "cb3c" },
    { "input": "SRL L", "hex": "cb3d" },
    { "input": "SRL (HL)", "hex": "cb3e" },
    { "input": "SRL A", "hex": "cb3f" },

    // Jumps
    { "input": "JP 0x55aa", "hex": "c355aa" },
    { "input": "JP NZ,0x55aa", "hex": "c255aa" },
    { "input": "JP Z,0x55aa", "hex": "ca55aa" },
    { "input": "JP NC,0x55aa", "hex": "d255aa" },
    { "input": "JP C,0x55aa", "hex": "da55aa" },
    { "input": "JP (HL)", "hex": "e9" },
    { "input": "JR 0x55", "hex": "1855" },
    { "input": "JR NZ,0x55", "hex": "2055" },
    { "input": "JR Z,0x55", "hex": "2855" },
    { "input": "JR NC,0x55", "hex": "3055" },
    { "input": "JR C,0x55", "hex": "3855" },

    // CALL
    { "input": "CALL 0x55aa", "hex": "cd55aa" },
    { "input": "CALL NZ,0x55aa", "hex": "c455aa" },
    { "input": "CALL Z,0x55aa", "hex": "cc55aa" },
    { "input": "CALL NC,0x55aa", "hex": "d455aa" },
    { "input": "CALL C,0x55aa", "hex": "dc55aa" },

    // RST
    { "input": "RST 00H", "hex": "c7" },
    { "input": "RST 08H", "hex": "cf" },
    { "input": "RST 10H", "hex": "d7" },
    { "input": "RST 18H", "hex": "df" },
    { "input": "RST 20H", "hex": "e7" },
    { "input": "RST 28H", "hex": "ef" },
    { "input": "RST 30H", "hex": "f7" },
    { "input": "RST 38H", "hex": "ff" },

    // Returns
    { "input": "RET", "hex": "c9" },
    { "input": "RET NZ", "hex": "c0" },
    { "input": "RET Z", "hex": "c8" },
    { "input": "RET NC", "hex": "d0" },
    { "input": "RET C", "hex": "d8" },
    { "input": "RETI", "hex": "d9" },


    // NOT TESTED YET 
    // BIT operations need a different mask structure
    /* 
        // BIT OPS
        { "input": "BIT b,B", "hex": "cb40" },
        { "input": "BIT b,C", "hex": "cb41" },
        { "input": "BIT b,D", "hex": "cb42" },
        { "input": "BIT b,E", "hex": "cb43" },
        { "input": "BIT b,H", "hex": "cb44" },
        { "input": "BIT b,L", "hex": "cb45" },
        { "input": "BIT b,(HL)", "hex": "cb46" },
        { "input": "BIT b,A", "hex": "cb47" },
        { "input": "RES b,B", "hex": "cb80" },
        { "input": "RES b,C", "hex": "cb81" },
        { "input": "RES b,D", "hex": "cb82" },
        { "input": "RES b,E", "hex": "cb83" },
        { "input": "RES b,H", "hex": "cb84" },
        { "input": "RES b,L", "hex": "cb85" },
        { "input": "RES b,(HL)", "hex": "cb86" },
        { "input": "RES b,A", "hex": "cb87" },
        { "input": "SET b,B", "hex": "cbc0" },
        { "input": "SET b,C", "hex": "cbc1" },
        { "input": "SET b,D", "hex": "cbc2" },
        { "input": "SET b,E", "hex": "cbc3" },
        { "input": "SET b,H", "hex": "cbc4" },
        { "input": "SET b,L", "hex": "cbc5" },
        { "input": "SET b,(HL)", "hex": "cbc6" },
        { "input": "SET b,A", "hex": "cbc7" },

        // IDK what this is, probably a mistake, recheck
        { "input": "LD (HL),n", "hex": "36" },

    */

]

const statistics = {
    tests : 0,
    passed : 0,
    failed : 0,
    failedData : []
}
testCases.forEach(test => {
    console.log("=================================================")
    statistics.tests += 1
    const machineCode = Assembler.asmLine(test.input)
    const resultText = machineCode
        .map(c => Number(c).toString(16))
        // padding with zero
        .map(s => s.length % 2 !== 0 ? "0"+s : s)
        .join("")
    if (resultText.toLowerCase() === test.hex.toLowerCase()) {
        statistics.passed += 1
        console.log("TEST PASSED!")
    } else {
        statistics.failed += 1
        test.result = resultText
        statistics.failedData.push(test)
    }
    console.log("=================================================")
})
console.log("STATISTICS")
console.log(statistics)
